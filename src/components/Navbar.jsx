"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/react";
import { useSession, signOut } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();

  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Tiles", href: "/alltiles" },
  ];

  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1A1A1A]/90 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-10xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
          <span className="text-white">AH </span>
          <span className="text-[#D4AF37]">TileCraft</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-0.5"
                    : "text-white/60 hover:text-white"
                }}`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {session && (
            <li>
              <Link
                href="/profile"
                className={`text-sm font-medium transition-colors duration-150 ${
                  pathname === "/profile"
                    ? "text-[#D4AF37] border-b-2 border-[#D4AF37] pb-0.5"
                    : "text-white/60 hover:text-white"
                }}`}
              >
                My Profile
              </Link>
            </li>
          )}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
          ) : !session ? (
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#D4AF37] text-black font-semibold rounded-xl px-4 py-2"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2">
                {session.user?.image ? (
                  <Image
                    src={session.user?.image}
                    alt={session.user.name || "User"}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-black text-sm font-bold">
                    {session.user.name?.[0]?.toUpperCase() ||
                      session.user.email?.[0]?.toUpperCase() ||
                      "U"}
                  </div>
                )}
                <span className="text-sm text-white">{session.user.name}</span>
              </Link>

              <Button
                size="sm"
                className="bg-red-500 text-white"
                onPress={handleSignOut}
              >
                Logout
              </Button>
            </div>
          )}

          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1A1A1A]">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-sm ${
                    pathname === link.href
                      ? "text-[#D4AF37] font-semibold"
                      : "text-white/70 hover:text-white"
                  }}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {session && (
              <li>
                <Link
                  href="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm text-[#D4AF37]"
                >
                  My Profile
                </Link>
              </li>
            )}
          </ul>

          <div className="px-4 py-3 border-t border-white/10 flex items-center gap-3">
            {!session ? (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm text-white/60"
                >
                  Login
                </Link>
                <Button
                  as={Link}
                  href="/register"
                  size="sm"
                  className="bg-[#D4AF37] text-black"
                  onPress={() => setIsMenuOpen(false)}
                >
                  Register
                </Button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="text-red-400 text-sm"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
