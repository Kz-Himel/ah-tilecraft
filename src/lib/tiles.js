import tilesData from "@/data/tilesData.json";

const tiles = tilesData?.tiles ?? [];

// All tiles
export function getAllTiles() {
  return tiles;
}

// Featured — safe immutable version
export function getFeaturedTiles() {
  return [...tiles]
    .filter((tile) => tile?.inStock)
    .sort((a, b) => (b?.price ?? 0) - (a?.price ?? 0))
    .slice(0, 4);
}

// Single tile by id
export function getTileById(id) {
  return tiles.find((tile) => tile.id === id) ?? null;
}