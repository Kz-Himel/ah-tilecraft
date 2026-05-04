"use client";

import { useSession } from "@/lib/auth-client";

const ProfilePage = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-[#1a2535] p-6 rounded-xl">
        <img
          src={session.user.image}
          className="w-20 h-20 rounded-full mx-auto"
        />
        <h2 className="text-xl mt-4">{session.user.name}</h2>
        <p>{session.user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;