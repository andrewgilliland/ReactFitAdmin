"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

type SearchInputProps = {
  name: string;
  className?: string;
};

const SearchInput: FC<SearchInputProps> = ({ name, className }) => {
  const [value, setValue] = useState("");
  const [searchQuery] = useDebounce(value, 500);
  const router = useRouter();

  useEffect(() => {
    router.push(
      searchQuery
        ? `/dashboard/exercises?search=${searchQuery}`
        : "/dashboard/exercises"
    );
  }, [searchQuery, router]);

  return (
    <label
      className={`flex items-center capitalize text-sm text-gray-500 ${className}`}
    >
      <MagnifyingGlassIcon className="h-6 w-6 fill-pink-400 mr-3" />
      <input
        className={`bg-black px-2 py-1 placeholder:text-gray-600 focus:outline-none`}
        type="search"
        name={name}
        autoComplete="on"
        placeholder={`Search all ${name}...`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default SearchInput;
