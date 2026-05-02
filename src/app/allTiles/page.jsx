import TileCard from "@/components/TileCard";
import { cache } from "react";

const AllTiles = async () => {
  const res = await fetch("http://localhost:5000/tiles", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch tiles");
  }
  const tiles = await res.json();

  console.log(tiles);

  return (
    <div>
      <h1>This is All Tiles Page</h1>
      <div>
        {tiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTiles;
