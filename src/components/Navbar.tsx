"use client";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { User } from "@supabase/supabase-js";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

type HeaderProps = {
  user: User | null;
};

const Navbar: FC<HeaderProps> = ({ user }) => {
  const isLoggedIn = user?.id ? true : false; // Todo: set this value if user is logged in
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div
            className={`relative z-20 flex w-full items-center justify-between bg-neutral-800 px-[10%] py-4 ${isOpen ? "rounded-b-none" : "rounded-b-2xl"}`}
          >
            <Link href="/">
              <Logo />
            </Link>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-xl bg-neutral-950 p-1 transition-transform hover:scale-105 active:scale-95"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-neutral-100" />
              ) : (
                <Bars3BottomLeftIcon className="h-6 w-6 text-neutral-100" />
              )}
            </button>
          </div>
          <div
            className={`${
              isOpen ? "translate-y-0" : "-translate-y-full"
            } absolute left-0 right-0 top-16 z-10 rounded-b-2xl border-b-2 border-neutral-950 bg-neutral-800 transition-transform`}
          >
            <div className="px-4 pb-4">
              <div className="grid gap-2 border-t border-neutral-600 pt-2">
                <Link href="/workouts">
                  <div className="rounded-xl px-4 py-2 text-base font-semibold text-neutral-100 hover:bg-neutral-700">
                    Workouts
                  </div>
                </Link>
                <Link href="/settings">
                  <div className="rounded-xl px-4 py-2 text-base font-semibold text-neutral-100 hover:bg-neutral-700">
                    Settings
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-4">
            {!pathname.includes("signin") ? (
              <Link href="/signin">
                <Button size="sm">Login</Button>
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
