"use client";

import { Input } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      router.push(`/alltiles?q=${value}`);
    } else {
      router.push("/alltiles");
    }
  };

  return (
    <Input
      type="text"
      defaultValue={searchParams.get("q") || ""}
      onChange={handleChange}
      placeholder="Search for tiles..."
      size="lg"
      radius="lg"
      classNames={{
        input: "text-white bg-transparent placeholder:text-white/30 text-sm",
        inputWrapper:
          "bg-[#1A1A1A] border border-white/10 hover:border-[#D4AF37] focus-within:border-[#D4AF37] transition-colors duration-200 h-14 shadow-none",
      }}
      startContent={
        <FiSearch className="text-white/30 w-5 h-5 shrink-0" />
      }
    />
  );
};

export default SearchInput;