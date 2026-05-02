import tilesData from "@/data/tilesData.json";

// All tiles
export function getAllTiles() {
  return tilesData.tiles;
}

// Featured — top 4 
export function getFeaturedTiles() {
  return tilesData.tiles
    .filter((tile) => tile.inStock)
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);
}

// Single tile by id
export function getTileById(id) {
  return tilesData.tiles.find((tile) => tile.id === id) ?? null;
}