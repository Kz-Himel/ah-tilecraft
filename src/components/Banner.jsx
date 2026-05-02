import Link from 'next/link'

const Banner = () => {
  return (
    <section className="relative bg-[#111] min-h-[480px] flex items-center overflow-hidden py-20">

      {/* Right — Tile Grid */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] grid grid-cols-3 grid-rows-3 gap-1.5 p-1.5 -skew-x-1 pointer-events-none">
        {[
          { cls: "row-span-2", bg: "bg-[#3d2b1f]" },
          { cls: "", bg: "bg-[#1a2a2a]" },
          { cls: "", bg: "bg-[#2a2015]" },
          { cls: "", bg: "bg-[#1f1f2e]" },
          { cls: "", bg: "bg-[#2a1a1a]" },
          { cls: "col-span-2", bg: "bg-[#1e2820]" },
          { cls: "", bg: "bg-[#251828]" },
        ].map((tile, i) => (
          <div
            key={i}
            className={`${tile.cls} ${tile.bg} rounded-[3px] relative overflow-hidden`}
          >
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg,rgba(255,255,255,0.04) 0px,rgba(255,255,255,0.04) 1px,transparent 1px,transparent 8px)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay — blends grid into bg */}
      <div className="absolute right-0 top-0 bottom-0 w-[52%] bg-gradient-to-l from-transparent to-[#111] via-[#111]/60 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 max-w-xl">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[11px] tracking-widest uppercase text-[#D4AF37] font-medium">
            New Arrivals Weekly
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Discover Your
          <br />
          Perfect{" "}
          <em className="not-italic text-[#D4AF37]">Aesthetic</em>
        </h1>

        <p className="text-sm text-white/50 leading-relaxed max-w-sm font-light mb-8">
          Curated tiles from artisan makers worldwide. From classic ceramics to
          bold geometric patterns — find the texture that transforms your space.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 flex-wrap">
          <Link
            href="/alltiles"
            className="bg-[#D4AF37] text-black text-sm font-semibold px-7 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Browse All Tiles
          </Link>
          
          <Link
            href="/collections"
            className="text-sm text-white/60 hover:text-white border border-white/15 hover:border-white/35 px-5 py-3 rounded-lg transition-all"
          >
            View Collections →
          </Link>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
          {[
            { val: "2,400+", label: "Tile Designs" },
            { val: "180+", label: "Artisan Makers" },
            { val: "50+", label: "Collections" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.val}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/40 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Banner;