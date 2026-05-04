"use client";

import { Input } from "@heroui/react";
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
    <form onSubmit={onSubmit} className="w-full">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for tiles by name, category or material..."
        size="lg"
        radius="lg"
        classNames={{
          input: "text-white bg-transparent placeholder:text-white/30 text-sm",
          inputWrapper:
            "bg-[#1A1A1A] border border-white/10 hover:border-[#D4AF37] focus-within:border-[#D4AF37] transition-colors duration-200 h-14 shadow-none px-4",
          // Inner content er space thik korar jonno
          innerWrapper: "gap-3" 
        }}
        endContent={
          <button 
            type="submit"
            className="flex items-center gap-2 px-3 py-1 hover:bg-white/5 rounded-lg transition-colors group border border-white/10"
          >
            <span className="text-white/70 text-xs font-medium group-hover:text-[#D4AF37]">Search</span>
            <FiSearch className="text-white/30 w-5 h-5 shrink-0 group-hover:text-[#D4AF37] transition-colors" />
          </button>
        }
      />
    </form>
  );
};

export default SearchInput;