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
    router.push(searchQuery ? `/${name}?search=${searchQuery}` : `/${name}`);
  }, [searchQuery, router, name]);

  return (
    <label
      className={`flex items-center text-sm capitalize text-neutral-500 ${className}`}
    >
      <MagnifyingGlassIcon className="mr-3 h-6 w-6 fill-orange-600" />
      <input
        className={`bg-black px-2 py-1 placeholder:text-neutral-600 focus:outline-none`}
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
