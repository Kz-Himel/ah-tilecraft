// User model import সরিয়ে directly better-auth দিয়ে update করুন
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    const updateData = {};
    if (body?.name?.trim()) updateData.name = body.name.trim();
    if (body?.image?.trim()) updateData.image = body.image.trim();

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    // ✅ better-auth এর built-in update use করুন
    const updatedUser = await auth.api.updateUser({
      headers: await headers(),
      body: updateData,
    });

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (err) {
    console.error("UPDATE USER ERROR:", err);
    return NextResponse.json({ error: err.message || "Server Error" }, { status: 500 });
  }
}