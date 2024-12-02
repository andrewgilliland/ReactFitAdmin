import { FC } from "react";
import Link from "next/link";

type DesktopNavMenuProps = {
  pages: { name: string; href: string }[];
  pathname: string;
};

const DesktopNavMenu: FC<DesktopNavMenuProps> = ({ pages, pathname }) => {
  return (
    <div className="ml-4 hidden gap-4 md:flex">
      {pages.map(({ href, name }, index) => (
        <Link key={index} href={href}>
          <div
            className={`rounded-xl px-3 py-1.5 text-base font-semibold text-neutral-100 ${pathname.includes(href) ? "bg-neutral-900" : "hover:bg-neutral-700"}`}
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DesktopNavMenu;
