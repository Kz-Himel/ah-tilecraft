import Link from "next/link";

const NotFound = () => {
  return (
    <div className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#F8F9FA] flex flex-col`}>
 
      {/* Navbar */}
      <nav className="h-16 border-b border-[#e2e2e2] bg-white flex items-center justify-between px-10">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1A1A1A]"
        >
          AuraTiles
        </Link>
        <div className="hidden md:flex items-center gap-8 font-[family-name:var(--font-inter)] text-[12px] font-medium tracking-widest uppercase">
          <Link href="/" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">Home</Link>
          <Link href="/tiles" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">All Tiles</Link>
          <Link href="/profile" className="text-[#1A1A1A] hover:text-[#D4AF37] transition-colors">My Profile</Link>
        </div>
      </nav>
 
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
 
        <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
          Error 404
        </p>
 
        <h1 className="font-[family-name:var(--font-playfair)] italic text-[#1A1A1A] text-5xl sm:text-6xl mb-3">
          Page not found
        </h1>
 
        <p className="font-[family-name:var(--font-inter)] text-[#888] text-sm leading-relaxed max-w-sm mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
 
        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            href="/"
            className="bg-[#D4AF37] text-white font-[family-name:var(--font-inter)] text-[11px] font-semibold tracking-widest uppercase px-6 py-2.5 rounded-sm hover:bg-[#c9a030] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/tiles"
            className="border border-[#1A1A1A] text-[#1A1A1A] font-[family-name:var(--font-inter)] text-[11px] font-medium tracking-widest uppercase px-6 py-2.5 rounded-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
          >
            Browse Tiles
          </Link>
        </div>
 
      </div>
 
      {/* Footer */}
      <footer className="h-14 border-t border-[#e2e2e2] flex items-center justify-center">
        <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#aaa] tracking-widest uppercase">
          AuraTiles © 2023
        </p>
      </footer>
 
    </div>
  );
}

export default NotFound;