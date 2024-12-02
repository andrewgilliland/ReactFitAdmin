"use client";
import Link from "next/link";
import Button from "../Button";
import { FC } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import DesktopNavMenu from "./DesktopNavMenu";

type DesktopNavbarProps = {
  isLoggedIn: boolean;
  pages: { name: string; href: string }[];
  pathname: string;
};

const DesktopNavbar: FC<DesktopNavbarProps> = ({
  isLoggedIn,
  pages,
  pathname,
}) => {
  return (
    <>
      <div
        className={`relative z-20 hidden w-full items-center justify-between rounded-b-2xl bg-neutral-800 px-6 py-4 md:flex md:px-[10%]`}
      >
        <div className="flex items-center">
          <Link href="/">
            <Logo />
          </Link>

          {isLoggedIn && <DesktopNavMenu pages={pages} pathname={pathname} />}
        </div>

        <div className="flex gap-4">
          {isLoggedIn ? (
            <>
              <Button size="sm">Logout</Button>
              <Link href="/profile" className="rounded-xl bg-neutral-950 p-1.5">
                <UserCircleIcon className="h-6 w-6 text-neutral-100" />
              </Link>
            </>
          ) : (
            <>
              <Link href="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>

              <Link href="/login">
                <Button size="sm" theme="neutral">
                  Login
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DesktopNavbar;
