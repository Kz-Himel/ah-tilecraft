import TileCard from "@/components/TileCard";

const AllTiles = async () => {

    const res = await fetch("./data/tilesData.json");
    const tiles = await res.json();

    return (
        <div>
            <h1>This is All Tiles Page</h1>
            <div>
                {
                    tiles.map((tile) => (
                        <TileCard key={tiles.id} tile={tile}/>
                    ))
                }
            </div>
        </div>
    );
};

export default AllTiles;