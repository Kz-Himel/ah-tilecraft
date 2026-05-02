"use client";

import { Card, Chip } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

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
    inStock,
  } = tile;

  return (
    <Card
      radius="lg"
      className="group w-full h-[420px] bg-[#1A1A1A] overflow-hidden relative flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-[60%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-110 transition duration-700"
        />
        {/* Out of Stock Overlay */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-red-400 text-xs font-bold uppercase tracking-widest border border-red-400 px-2 py-1 rounded">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-4">
        {/* Top */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <Chip className="bg-[#D4AF37] text-black text-[10px] font-bold uppercase px-2 py-0 h-6">
              {category}
            </Chip>
          </div>

          <h4 className="text-white text-sm font-semibold mb-1 line-clamp-1">
            {title}
          </h4>

          <p className="text-white/60 text-xs line-clamp-2 mb-2">
            {description}
          </p>

          <div className="text-[10px] text-white/40 flex gap-2">
            <span>{dimensions}</span>
            <span>•</span>
            <span>{material}</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-3">
          <div className="text-white font-bold mb-2 text-sm">
            {currency} {price}
          </div>

          <Link href={`/tiles/${id}`} className="block">
            <button
              disabled={!inStock}
              className={`w-full flex items-center justify-center gap-2 text-xs font-bold uppercase py-2 px-4 rounded-lg transition
                ${
                  inStock
                    ? "bg-[#D4AF37] text-black hover:bg-[#b8962e]"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
            >
              Show Details <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default TileCard;