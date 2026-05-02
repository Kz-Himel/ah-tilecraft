import TileCard from "@/components/TileCard";

const AllTiles = async () => {
  
  const res = await fetch("http://localhost:5000/tiles");
  const tiles = await res.json();

  // try {
  //   const res = await fetch("http://localhost:5000/tiles", {
  //     cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch tiles");
  //   }

  //   const tiles = await res.json();

  //   console.log(tiles);
  // } catch (error) {
  //   return (
  //     <section className="bg-[#0a0a0a] py-20 px-4">
  //       <div className="max-w-7xl mx-auto w-full text-center">
  //         <p className="text-red-400 text-sm">
  //           Failed to load tiles. Please try again later.
  //         </p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="bg-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tiles.map((tile) => (
            <TileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllTiles;