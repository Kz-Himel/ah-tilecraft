import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { auth } from "@/lib/auth";

export async function PATCH(req) {
  try {
    await dbConnect();

    const session = await auth();

    // AUTH CHECK 
    if (!session?.user?.email) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    let body;

    try {
      body = await req.json();
    } catch (parseError) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const updateData = {};

    if (body?.name?.trim()) {
      updateData.name = body.name.trim();
    }

    if (body?.image?.trim()) {
      updateData.image = body.image.trim();
    }

    // Nothing to update check
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: "Nothing to update" },
        { status: 400 }
      );
    }

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
    console.error("UPDATE USER ERROR:", err);

    return NextResponse.json(
      {
        error: err.message || "Server Error",
      },
      { status: 500 }
    );
  }
}