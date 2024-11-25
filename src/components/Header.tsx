"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { User } from "@supabase/supabase-js";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

type HeaderProps = {
  user: User | null;
};

const Header: FC<HeaderProps> = ({ user }) => {
  const isLoggedIn = user?.id ? true : false; // Todo: set this value if user is logged in
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center bg-gray-800 px-[10%] py-4 rounded-b-2xl">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          React<span className="text-orange-600">Fit</span>
        </h1>
      </Link>
      {isLoggedIn ? (
        <Link href="/dashboard" className="group">
          <div className="flex justify-center items-center bg-gray-900 h-12 w-12 rounded-xl group-active:scale-95">
            <Cog6ToothIcon className="h-6 w-6 text-gray-200 group-active:rotate-180 transition" />
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
