import TileCard from "@/components/TileCard";
import { getAllTiles } from "@/lib/tiles";

const AllTiles = () => {
  
  const tiles = getAllTiles();
  console.log(tiles);

  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
          tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default AllTiles;