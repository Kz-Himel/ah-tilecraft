import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import { auth } from "@/lib/auth";

export async function PATCH(req) {
  try {
    await dbConnect();

    // 🔐 get session
    const session = await auth();

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    // IMPORTANT FIX:
    // Better Auth user id usually matches DB "id" or "email"
    // safer approach = find by email

    const updatedUser = await User.findOneAndUpdate(
      { email: session.user.email }, // SAFE KEY
      { $set: { name: body.name } },
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
    console.error("UPDATE_USER_ERROR:", err);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}