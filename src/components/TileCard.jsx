import { Card, CardFooter, Image, Button, Chip } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";

const TileCard = ({ tile }) => {
  const {
    id,
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock
  } = tile;

  return (
    <Card
      isFooterBlurred
      className="group w-full h-[480px] border-none bg-[#1A1A1A] overflow-hidden"
      radius="lg"
    >
      {/* Category & Price Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
        {/* Category Badge */}
        <Chip 
          variant="flat" 
          className="bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-2 py-0 h-7"
        >
          {category}
        </Chip>

        {/* Stock Status / Price */}
        <div className="flex flex-col items-end gap-2">
          {!inStock && (
            <span className="bg-red-500/80 backdrop-blur-md text-white text-[9px] px-2 py-1 rounded-sm uppercase tracking-tighter">
              Out of Stock
            </span>
          )}
          <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white px-3 py-1 rounded-md text-sm font-bold">
            {currency} {price}
          </span>
        </div>
      </div>

      {/* Image with Professional Zoom */}
      {/* <Image
        alt={title}
        removeWrapper
        className="z-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        src={image}
      /> */}

      {/* Footer Details */}
      <CardFooter className="absolute bottom-0 z-10 border-t border-white/10 bg-black/70 flex-col items-start p-6 backdrop-blur-lg transition-all duration-500 group-hover:bg-black/90">
        <div className="w-full mb-3">
          <h4 className="text-white font-serif text-2xl font-semibold tracking-wide mb-1 transition-colors group-hover:text-[#D4AF37]">
            {title}
          </h4>
          <div className="flex items-center gap-3">
            <p className="text-[#D4AF37]/80 text-[11px] font-mono uppercase tracking-widest">
              {dimensions}
            </p>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <p className="text-white/40 text-[11px] font-mono uppercase tracking-widest">
              {material}
            </p>
          </div>
        </div>

        <p className="text-white/60 text-xs line-clamp-2 mb-6 leading-relaxed font-light italic">
          {description}
        </p>

        <Button
          fullWidth
          className="bg-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase transition-all duration-400 py-6 hover:bg-white hover:scale-[1.02]"
          radius="none"
          endContent={<FaArrowRight className="text-[12px] group-hover:translate-x-1 transition-transform" />}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TileCard;