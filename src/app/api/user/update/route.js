import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { auth } from "@/lib/auth";

export async function PATCH(req) {
  try {
    await dbConnect();

    const session = await auth();

    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    console.log(session);

    const body = await req.json();

    const updateData = {};

    if (body.name) updateData.name = body.name;
    if (body.image) updateData.image = body.image;

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email },
      { $set: updateData },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: updatedUser,
    });

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}