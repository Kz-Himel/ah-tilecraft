import { Suspense } from "react";
import TileCard from "@/components/TileCard";
import SearchInput from "@/components/SearchInput";
import { getAllTiles } from "@/lib/tiles";

const AllTiles = ({ searchParams }) => {
  const query = searchParams?.q?.toLowerCase() || "";
  const allTiles = getAllTiles();

  const tiles = allTiles.filter((tile) =>
    tile.title.toLowerCase().includes(query)
  );

  return (
    <section className="bg-[#0a0a0a] min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header + Search */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            All Tiles
          </h1>
          <p className="text-white/40 text-sm mb-8">
            Browse our premium collection of tiles
          </p>

          <div className="max-w-2xl mx-auto">
            <Suspense>
              <SearchInput />
            </Suspense>
          </div>

          {query && (
            <p className="text-white/40 text-xs mt-4">
              Results for{" "}
              <span className="text-[#D4AF37] font-semibold">
                &quot;{query}&quot;
              </span>{" "}
              — {tiles.length} tile{tiles.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>

        {/* Grid */}
        {tiles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-4 border border-white/10">
              <span className="text-2xl">🔍</span>
            </div>
            <p className="text-white font-semibold mb-1">No tiles found</p>
            <p className="text-white/40 text-sm">
              Try searching with a different keyword
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default AllTiles;