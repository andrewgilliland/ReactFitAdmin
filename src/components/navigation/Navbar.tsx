"use client";
import Link from "next/link";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { User } from "@supabase/supabase-js";
import {
  Bars3BottomLeftIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "../Logo";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

type HeaderProps = {
  user: User | null;
};

const Navbar: FC<HeaderProps> = ({ user }) => {
  const isLoggedIn = user?.id ? true : false; // Todo: set this value if user is logged in
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    {
      name: "Programs",
      href: "/programs",
    },
    {
      name: "Workouts",
      href: "/workouts",
    },
    {
      name: "Exercises",
      href: "/exercises",
    },
  ];

  return (
    <div>
      {isLoggedIn ? (
        <>
          <div
            className={`relative z-20 flex w-full items-center justify-between bg-neutral-800 px-6 py-4 md:px-[10%] ${isOpen ? "rounded-b-none" : "rounded-b-2xl"}`}
          >
            <div className="flex items-center">
              <Link href="/">
                <Logo />
              </Link>

              <DesktopNavMenu pages={pages} pathname={pathname} />
            </div>

            <div className="hidden gap-4 md:flex">
              <Button size="sm">Logout</Button>
              <Link href="/profile" className="rounded-xl bg-neutral-950 p-1.5">
                <UserCircleIcon className="h-6 w-6 text-neutral-100" />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-xl bg-neutral-950 p-1 transition-transform hover:scale-105 active:scale-95 md:hidden"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-neutral-100" />
              ) : (
                <Bars3BottomLeftIcon className="h-6 w-6 text-neutral-100" />
              )}
            </button>
          </div>
          <MobileNavMenu
            isOpen={isOpen}
            isLoggedIn={isLoggedIn}
            pages={pages}
            pathname={pathname}
          />
        </>
      ) : (
        <div
          className={`relative z-20 flex w-full items-center justify-between bg-neutral-800 px-6 py-4 md:px-[10%] ${isOpen ? "rounded-b-none" : "rounded-b-2xl"}`}
        >
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex gap-4">
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>

            <Link href="/login">
              <Button size="sm" theme="neutral">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
