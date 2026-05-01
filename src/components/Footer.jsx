import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerItems = [
    "Ceramic", "Porcelain", "Mosaic", "Terracotta",
    "Geometric", "Handmade", "Marble Effect", "Wood Look", "Cement", "Encaustic"
  ];

  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Brand Content Section --- */}
        <div className="mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-medium">
            AH TileCraft
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 leading-tight">
            Elevate Your Space with <br /> 
            <span className="italic text-white/90">Timeless Craftsmanship.</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed font-light text-center">
            Discover a curated collection of premium tiles that blend tradition with 
            modern aesthetics. From handmade terracotta to sleek porcelain, we provide 
            the foundation for your dream interior.
          </p>
        </div>

        {/* --- Links Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-t border-white/10 pt-12">
          
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-[#D4AF37] font-serif text-lg tracking-wider">Contact Us</h3>
            <div className="text-white/40 text-sm leading-relaxed">
              <p>Artisan Co.</p>
              <p>123 Tile Street, Design District</p>
              <p>contact@ahtilecraft.com</p>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col items-start md:items-center space-y-4">
            <h3 className="text-[#D4AF37] font-serif text-lg tracking-wider">Social Media</h3>
            <div className="flex gap-6">
              <FaFacebookF className="text-white/40 hover:text-[#D4AF37] transition-colors cursor-pointer" />
              <FaInstagram className="text-white/40 hover:text-[#D4AF37] transition-colors cursor-pointer" />
              <FaLinkedinIn className="text-white/40 hover:text-[#D4AF37] transition-colors cursor-pointer" />
              <FaTwitter className="text-white/40 hover:text-[#D4AF37] transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Copyright Column */}
          <div className="flex flex-col md:items-end space-y-4">
            <h3 className="text-[#D4AF37] font-serif text-lg tracking-wider">Copyright</h3>
            <p className="text-white/40 text-sm">
              Copyright © {new Date().getFullYear()} AH TileCraft.
            </p>
          </div>
        </div>
      </div>

      {/* --- Ticker Section --- */}
      <div className="relative border-t border-white/[0.07] overflow-hidden py-4 mt-10">
        <div className="flex whitespace-nowrap animate-ticker">
          {Array(2).fill(footerItems).flat().map((item, i) => (
            <span key={i} className="text-[11px] tracking-[0.3em] uppercase text-white/20 px-10 flex items-center">
              <span className="text-[#D4AF37]/40 mr-3">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* --- Bottom Branding --- */}
      <div className="py-6 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-white/10 font-light">
          AH TileCraft — an art of home
        </p>
      </div>
    </footer>
  );
};

export default Footer;