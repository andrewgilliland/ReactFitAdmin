"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import {
  // ChangeEvent,
  FC,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

type InputProps = {
  name: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  className?: string;
  isDisabled?: boolean;
  // value?: string;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
  name,
  type = "text",
  className,
  isDisabled = false,
}) => {
  const [value, setValue] = useState("");
  const [searchQuery] = useDebounce(value, 500);
  const router = useRouter();
  const isSearchInput = type === "search";

  useEffect(() => {
    router.push(`/dashboard/exercises?search=${searchQuery}`);
  }, [searchQuery, router]);

  return (
    <label
      className={`flex items-center capitalize text-sm text-gray-500 ${className}`}
    >
      {isSearchInput ? (
        <MagnifyingGlassIcon className="h-6 w-6 fill-pink-400 mr-3" />
      ) : (
        <span className="mr-3">{name}</span>
      )}
      <input
        className={`bg-black border-2 rounded mt-1 px-2 py-1 placeholder:text-gray-600 ${
          isDisabled
            ? "border-gray-500 text-gray-500"
            : "border-pink-400 text-white"
        } ${isSearchInput && "border-0 focus:outline-none"}`}
        type={type}
        name={name}
        autoComplete="on"
        disabled={isDisabled}
        placeholder={isSearchInput ? `Search all ${name}...` : ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </label>
  );
};

export default Input;
