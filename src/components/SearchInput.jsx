"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState, useCallback } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");

  const handleSearch = useCallback((value) => {
    const params = new URLSearchParams(window.location.search);
    if (value.trim()) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.push(`/alltiles?${params.toString()}`, { scroll: false });
  }, [router]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(text);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== (searchParams.get("q") || "")) {
        handleSearch(text);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [text, handleSearch, searchParams]);

  return (
    <div className="w-full px-4 sm:px-0"> {/* Mobile padding */}
      <form 
        onSubmit={onSubmit} 
        className="relative flex items-center w-full max-w-3xl mx-auto group"
      >
        <div className="relative flex items-center w-full h-14 sm:h-16 bg-[#121212] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 focus-within:border-[#D4AF37] focus-within:ring-1 focus-within:ring-[#D4AF37]/50 shadow-2xl">
          
          {/* Left Icon */}
          <div className="pl-5 hidden sm:block">
            <FiSearch className="text-white/20 w-5 h-5 group-focus-within:text-[#D4AF37] transition-colors" />
          </div>

          {/* Main Input Field */}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search tiles (e.g. Marble, Ceramic...)"
            className="flex-grow bg-transparent text-white px-5 sm:px-4 py-2 text-base outline-none placeholder:text-white/20"
          />

          {/* Premium Search Button */}
          <div className="pr-2">
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#B8962D] text-black h-10 sm:h-12 px-4 sm:px-8 rounded-xl transition-all duration-200 active:scale-95 font-bold"
            >
              <FiSearch className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline-block text-sm uppercase tracking-wider">Search</span>
            </button>
          </div>
        </div>

        {/* Glow Effect Background*/}
        <div className="absolute -inset-1 bg-[#D4AF37]/10 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
      </form>
    </div>
  );
};

export default SearchInput;