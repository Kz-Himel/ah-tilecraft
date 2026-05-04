"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { FiUser, FiMail, FiLogOut } from "react-icons/fi";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
    router.refresh();
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!session) return null;

  const user = session.user;
  const avatarLetter = user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Card */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
          {/* Top banner */}
          <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600" />

          {/* Avatar */}
          <div className="px-8 pb-8">
            <div className="-mt-12 mb-6">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-gray-900 object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-20 h-20 rounded-full border-4 border-gray-900 bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  {avatarLetter}
                </div>
              )}
            </div>

            <h1 className="text-2xl font-bold text-white mb-1">
              {user.name || "Anonymous User"}
            </h1>
            <p className="text-gray-400 text-sm mb-8">Member of AH Tilecraft</p>

            {/* Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3">
                <FiUser className="text-blue-400 text-lg shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Full Name</p>
                  <p className="text-white text-sm">{user.name || "Not set"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3">
                <FiMail className="text-blue-400 text-lg shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-white text-sm">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Sign out */}
            <button
              onClick={handleSignOut}
              className="mt-8 w-full flex items-center justify-center gap-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 text-red-400 hover:text-red-300 font-medium py-2.5 rounded-lg transition"
            >
              <FiLogOut />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}