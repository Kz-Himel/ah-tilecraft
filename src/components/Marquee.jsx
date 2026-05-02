"use client";
 
const marqueeItems = [
  "New Arrivals: Onyx Gold",
  "New Arrivals: Moroccan Zellige",
  "New Arrivals: Handmade",
  "New Arrivals: Terracotta",
  "New Arrivals: Wood Look",
  "New Arrivals: Cobalt Blue Mosaic",
  "New Arrivals: Mosaic",
  "New Arrivals: Marble Effect",
  "New Arrivals: Geomatric",
  "Weekly Feature: Modern Geometric Patterns",
  "Free Shipping on Orders Over $200",
  "Join the Community",
  "Premium Tiles from Around the World",
];
 
const Marquee = () => {
  const doubled = [...marqueeItems, ...marqueeItems];
 
  return (
    <div className="relative overflow-hidden bg-[#1A1A1A] border-t border-b border-[#2a2a2a] py-[10px]">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#1A1A1A] to-transparent" />
 
      {/* Track — pauses on hover */}
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center whitespace-nowrap font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#F8F9FA]"
          >
            {item}
            <span className="mx-3 text-[9px] text-[#D4AF37]">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
export default Marquee;