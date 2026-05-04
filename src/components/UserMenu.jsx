"use client";

import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const UserMenu = () => {
  const { data: session, isPending } = useSession();

  if (isPending) return null;

  if (!session) {
    return (
      <div className="flex gap-3">
        <Link href="/login" className="btn">Login</Link>
        <Link href="/register" className="btn">Register</Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link href="/profile" className="flex items-center gap-2">
        <Image
          src={session.user.image || "/default.png"}
          className="w-8 h-8 rounded-full"
        />
        <span>{session.user.name}</span>
      </Link>

      <button
        onClick={() => signOut({ callbackURL: "/" })}
        className="bg-red-500 px-3 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;