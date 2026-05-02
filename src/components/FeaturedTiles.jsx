// components/FeaturedTiles.jsx
// Next.js Server Component — no "use client" needed
// Local JSON থেকে data আসে তাই loading / error / skeleton কিছুই নেই

import Link from "next/link";
import TileCard from "./TileCard";
import { getFeaturedTiles } from "@/lib/tiles";

const FeaturedTiles = () => {
  const featuredTiles = getFeaturedTiles();

  return (
    <section className="bg-[#F8F9FA] px-6 py-16 md:px-10 lg:px-16">

      {/* Section Header */}
      <div className="mb-10">
        <p className="mb-[10px] font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#D4AF37]">
          Curated Collection
        </p>

        {/* <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-bold leading-[1.15] text-[#1A1A1A]">
            Featured Tiles
          </h2>
          <Link
            href="/tiles"
            className="border-b-[1.5px] border-[#D4AF37] pb-[2px] font-sans text-[12px] font-bold uppercase tracking-[0.1em] text-[#1A1A1A] transition-colors hover:text-[#D4AF37]"
          >
            View All Tiles →
          </Link>
        </div> */}

        <div className="mt-4 h-[2px] w-12 bg-[#D4AF37]" />
      </div>

      {/* Tile Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredTiles.map((tile, i) => (
          <TileCard key={tile.id} tile={tile} index={i} />
        ))}
      </div>

    </section>
  );
};

export default FeaturedTiles;