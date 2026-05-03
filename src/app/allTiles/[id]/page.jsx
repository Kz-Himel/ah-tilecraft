import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTileById, getAllTiles } from "@/lib/tiles";
import { FaArrowLeft, FaCheck, FaXmark } from "react-icons/fa6";
import { Chip } from "@heroui/react";

// Generate Static Params
export async function generateStaticParams() {
  const tiles = getAllTiles();
  return tiles.map((tile) => ({ id: tile.id }));
}

// Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;           // ← এখানে await করা হয়েছে
  const tile = getTileById(id);
  
  if (!tile) return { title: "Tile Not Found" };

  return {
    title: `${tile.title} | AH TileCraft`,
    description: tile.description,
  };
};

// Detail Row
function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-3">
      <span className="text-white/40 text-xs uppercase tracking-widest font-semibold">
        {label}
      </span>
      <span className="text-white/90 text-sm font-medium">{value}</span>
    </div>
  );
};

// Main Page
const TileDetailPage = async ({ params }) => {     // ← async করা হয়েছে
  const { id } = await params;                    // ← await করা হয়েছে
  const tile = getTileById(id);

  if (!tile) notFound();

  const {
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock,
  } = tile;

  return (
    <main className="min-h-screen bg-[#0a0a0a]">

      {/* Top Bar */}
      <div className="border-b border-white/10 px-4 md:px-10 lg:px-16 py-4">
        <Link
          href="/allTiles"
          className="inline-flex items-center gap-2 text-white/50 hover:text-[#D4AF37] transition-colors text-sm font-medium"
        >
          <FaArrowLeft className="text-xs" />
          Back to All Tiles
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Image Section */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#1A1A1A]">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {!inStock && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-red-400 text-sm font-bold uppercase tracking-widest border border-red-400 px-4 py-2 rounded-lg">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>

            <div className="absolute -bottom-4 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-40" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-6">

            <div className="flex items-center gap-3 flex-wrap">
              <Chip className="bg-[#D4AF37] text-black text-[10px] font-bold uppercase px-3 h-6">
                {category}
              </Chip>

              {inStock ? (
                <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold uppercase tracking-widest">
                  <FaCheck className="text-[10px]" /> In Stock
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-red-400 text-xs font-semibold uppercase tracking-widest">
                  <FaXmark className="text-[10px]" /> Out of Stock
                </span>
              )}
            </div>

            <div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-[1.15]">
                {title}
              </h1>
              <div className="mt-3 h-[2px] w-14 bg-[#D4AF37]" />
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              {description}
            </p>

            <div className="flex items-baseline gap-2">
              <span className="font-serif text-4xl font-bold text-white">
                {currency} {price.toFixed(2)}
              </span>
              <span className="text-white/40 text-sm">/ {dimensions}</span>
            </div>

            <div className="bg-[#1A1A1A] rounded-xl px-5 py-2 border border-white/10">
              <DetailRow label="Material" value={material} />
              <DetailRow label="Dimensions" value={dimensions} />
              <DetailRow label="Category" value={category} />
              <DetailRow
                label="Availability"
                value={inStock ? "In Stock" : "Out of Stock"}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                disabled={!inStock}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-bold uppercase tracking-widest transition-all duration-200
                  ${inStock
                    ? "bg-[#D4AF37] text-black hover:bg-[#b8962e] active:scale-95"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
              >
                {inStock ? "Add to Cart" : "Unavailable"}
              </button>

              <button
                disabled={!inStock}
                className={`flex-1 py-3 px-6 rounded-lg text-sm font-bold uppercase tracking-widest border transition-all duration-200
                  ${inStock
                    ? "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 active:scale-95"
                    : "border-white/10 text-white/20 cursor-not-allowed"
                  }`}
              >
                Request Sample
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mx-4 md:mx-10 lg:mx-16" />
    </main>
  );
};

export default TileDetailPage;