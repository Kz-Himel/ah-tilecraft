import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/FeaturedTiles";
import Marquee from "@/components/Marquee";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Marquee />
      <FeaturedTiles />
    </div>
  );
}
export default Home;