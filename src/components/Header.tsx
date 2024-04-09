"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { User } from "@supabase/supabase-js";

type HeaderProps = {
  user: User | null;
};

const Header: FC<HeaderProps> = ({ user }) => {
  const isLoggedIn = user?.id ? true : false; // Todo: set this value if user is logged in
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center px-[10%] py-4 border-b-2 border-cyan-400">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          React<span className="text-pink-400">Fit</span>
        </h1>
      </Link>
      {isLoggedIn ? (
        <div className="flex gap-4">
          {!pathname.includes("signin") ? (
            <Link href="/signin">
              <Button size="sm">Sign In</Button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center bg-cyan-400 h-7 w-7 rounded-full">
          <div className="flex justify-center items-center bg-yellow-400 h-6 w-6 rounded-full border-4 border-black">
            <div className="bg-pink-400 h-3 w-3 rounded-full border-4 border-black" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
