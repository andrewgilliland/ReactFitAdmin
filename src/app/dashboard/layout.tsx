"use client";
import { FC, ReactNode, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = [
    { name: "exercises" },
    { name: "workouts" },
    { name: "programs" },
  ];

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-2">
        {routes.map(({ name }, index) => (
          <Link
            key={`${name}-${index}`}
            className={`capitalize font-semibold border-2 md:border-t-2 border-x-2 border-cyan-400 px-4 py-2 rounded-md md:rounded-t-md md:rounded-b-none transition hover:bg-cyan-400 hover:text-black ${
              pathname.includes(name)
                ? "bg-cyan-400 text-black"
                : "bg-black text-cyan-400"
            }`}
            href={`/dashboard/${name}`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="border-2 border-cyan-400 rounded-tl-md md:rounded-tl-none rounded-tr-md rounded-b-md px-2 md:px-12 py-10 mt-4 md:mt-0">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
