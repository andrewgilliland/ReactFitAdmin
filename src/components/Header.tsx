"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { User } from "@supabase/supabase-js";
import { UserCircleIcon } from "@heroicons/react/24/outline";

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
        <Link href="/dashboard">
          <div className="flex justify-center items-center bg-yellow-400 h-9 w-9 rounded-full">
            <div className="flex justify-center items-center bg-black h-8 w-8 rounded-full">
              <UserCircleIcon className="h-7 w-7 text-cyan-400" />
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex gap-4">
          {!pathname.includes("signin") ? (
            <Link href="/signin">
              <Button size="sm">Sign In</Button>
            </Link>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
