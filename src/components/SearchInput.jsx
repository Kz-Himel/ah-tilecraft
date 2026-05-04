"use client";

import { Input, Button } from "@heroui/react";
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
    <form onSubmit={onSubmit} className="flex flex-row items-center gap-2 w-full">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search for tiles..."
        size="lg"
        radius="lg"
        classNames={{
          input: "text-white bg-transparent placeholder:text-white/30 text-sm",
          inputWrapper:
            "bg-[#1A1A1A] border border-white/10 hover:border-[#D4AF37] focus-within:border-[#D4AF37] transition-colors duration-200 h-14 shadow-none px-4",
        }}
      />
      
      <Button
        type="submit"
        className="h-14 px-6 bg-[#D4AF37] text-black font-bold hover:bg-[#b8962d] transition-colors"
        radius="lg"
        startContent={<FiSearch className="w-5 h-5" />}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchInput;