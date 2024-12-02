import Link from "next/link";
import Button from "../Button";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

type MobileNavMenuProps = {
  isOpen: boolean;
  isLoggedIn: boolean;
  pages: { name: string; href: string }[];
  pathname: string;
};

const MobileNavMenu: FC<MobileNavMenuProps> = ({
  isOpen,
  isLoggedIn,
  pages,
  pathname,
}) => {
  return (
    <div
      className={`${
        isOpen ? "translate-y-0" : "-translate-y-full"
      } absolute left-0 right-0 top-16 z-10 rounded-b-2xl border-b-2 border-neutral-950 bg-neutral-800 transition-transform md:hidden`}
    >
      <div className="px-4 pb-4">
        {isLoggedIn ? (
          <>
            <div className="grid gap-2 border-y border-neutral-600 py-2">
              {pages.map(({ href, name }, index) => (
                <Link key={index} href={href}>
                  <div
                    className={`rounded-xl px-4 py-2 text-base font-semibold text-neutral-100 ${pathname.includes(href) ? "bg-neutral-900" : "hover:bg-neutral-700"}`}
                  >
                    {name}
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between pl-4 pr-2 pt-2">
              <Button size="sm" className="max-w-fit">
                Logout
              </Button>
              <Link href="/profile" className="rounded-xl bg-neutral-950 p-1.5">
                <UserCircleIcon className="h-6 w-6 text-neutral-100" />
              </Link>
            </div>
          </>
        ) : (
          <div className="grid gap-2 border-t border-neutral-600 pt-2">
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
            <Link href="/login">
              <Button size="sm" theme="neutral">
                Login
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavMenu;
