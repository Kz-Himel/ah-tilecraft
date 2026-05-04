"use client";

import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiUser, FiMail, FiLogOut, FiEdit2 } from "react-icons/fi";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
  });

  //  Redirect only
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  //  IMPORTANT FIX:
  //  removed session sync useEffect completely

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
    router.refresh();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✏️ EDIT START (safe init here)
  const handleEditStart = () => {
    setFormData({
      name: session?.user?.name || "",
    });

    setIsEditing(true);
  };

  //  SAVE
  const handleSave = async () => {
    try {
      const res = await fetch("/api/user/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Update failed");

      setIsEditing(false);

      router.refresh();
    } catch (err) {
      alert("Update failed");
    }
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

  const avatarLetter =
    user.name?.[0]?.toUpperCase() ||
    user.email?.[0]?.toUpperCase() ||
    "U";

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-gray-900 rounded-2xl border border-gray-800 shadow-xl overflow-hidden">
          <div className="h-24 bg-gradient-to-r from-blue-600 to-purple-600" />

          <div className="px-8 pb-8">
            <div className="-mt-12 mb-6">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full border-4 border-gray-900 object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full border-4 border-gray-900 bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                  {avatarLetter}
                </div>
              )}
            </div>

            {!isEditing ? (
              <>
                <h1 className="text-2xl font-bold text-white mb-1">
                  {user.name || "Anonymous User"}
                </h1>

                <p className="text-gray-400 text-sm mb-6">
                  Member of AH Tilecraft
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3">
                    <FiUser className="text-blue-400" />
                    <p className="text-white text-sm">
                      {user.name || "Not set"}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3">
                    <FiMail className="text-blue-400" />
                    <p className="text-white text-sm">{user.email}</p>
                  </div>
                </div>

                {/* EDIT */}
                <button
                  onClick={handleEditStart}
                  className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg"
                >
                  <FiEdit2 />
                  Edit Profile
                </button>
              </>
            ) : (
              <>
                <h1 className="text-xl text-white mb-4">
                  Edit Profile
                </h1>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mb-3 p-2 rounded bg-gray-800 text-white"
                  placeholder="Name"
                />

                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-green-600 py-2 rounded"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => setIsEditing(false)}
                    className="flex-1 bg-gray-700 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}

            {/* SIGN OUT */}
            <button
              onClick={handleSignOut}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-red-600/10 border border-red-500/30 text-red-400 py-2.5 rounded-lg"
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