"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Tiles", href: "/all-tiles" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1A1A1A]/90 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Left — Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight shrink-0">
          <span className="text-white">AH </span>
          <span className="text-[#D4AF37]">TileCraft</span>
        </Link>

        {/* Center — Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — Auth Buttons + Mobile Toggle */}
        <div className="flex items-center gap-3">

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Button
              as={Link}
              href="/register"
              size="sm"
              className="bg-[#D4AF37] text-black font-semibold rounded-lg px-4"
            >
              Register
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#1A1A1A]">
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-sm text-white/70 hover:text-white border-b border-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 py-3 border-t border-white/10 flex items-center gap-3">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Button
              as={Link}
              href="/register"
              size="sm"
              className="bg-[#D4AF37] text-black font-semibold rounded-lg px-4"
              onPress={() => setIsMenuOpen(false)}
            >
              Register
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;