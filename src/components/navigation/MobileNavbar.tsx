import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../Logo";
import MobileNavMenu from "./MobileNavMenu";
import { Page } from "@/types";

type MobileNavbarProps = {
  isLoggedIn: boolean;
  pages: Page[];
  pathname: string;
};

const MobileNavbar: FC<MobileNavbarProps> = ({
  isLoggedIn,
  pages,
  pathname,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <div
        className={`relative z-20 flex w-full items-center justify-between bg-neutral-800 px-6 py-4 md:hidden md:px-[10%] ${isOpen ? "rounded-b-none" : "rounded-b-2xl"}`}
      >
        <Link href="/">
          <Logo />
        </Link>

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
  );
};

export default MobileNavbar;
