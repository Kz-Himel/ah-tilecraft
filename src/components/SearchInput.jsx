"use client";

import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useEffect, useState, useCallback } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");

  // Update url
  const handleSearch = useCallback((value) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    router.push(`/alltiles?${params.toString()}`, { scroll: false });
  }, [router]);

  // Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(text);
    }
  };

  // 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text !== (searchParams.get("q") || "")) {
        handleSearch(text);
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [text, handleSearch, searchParams]);

  return (
    <Input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder="Search for tiles by name, category or material..."
      size="lg"
      radius="lg"
      classNames={{
        input: "text-white bg-transparent placeholder:text-white/30 text-sm",
        inputWrapper:
          "bg-[#1A1A1A] border border-white/10 hover:border-[#D4AF37] focus-within:border-[#D4AF37] transition-colors duration-200 h-14 shadow-none",
      }}
      startContent={
        <button onClick={() => handleSearch(text)} type="button">
          <FiSearch className="text-white/30 w-5 h-5 shrink-0 hover:text-[#D4AF37] transition-colors" />
        </button>
      }
    />
  );
};

export default SearchInput;