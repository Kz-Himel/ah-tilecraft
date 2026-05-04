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
    <form onSubmit={onSubmit} className="w-full max-w-2xl mx-auto">
      {/* Wrapper Div jeta Input ar Button ke dore rakhbe */}
      <div className="relative flex items-center w-full h-14 bg-[#1A1A1A] border border-white/10 rounded-xl px-4 hover:border-[#D4AF37] focus-within:border-[#D4AF37] transition-all duration-200">
        
        {/* Real Input Tag */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for tiles by name, category..."
          className="flex-grow bg-transparent text-white text-sm outline-none placeholder:text-white/30"
        />

        {/*  */}
        <button 
          type="submit"
          className="flex items-center gap-2 bg-[#D4AF37] hover:bg-[#b8962d] text-black px-4 py-2 rounded-lg transition-colors font-semibold text-sm"
        >
          <FiSearch className="w-4 h-4" />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;