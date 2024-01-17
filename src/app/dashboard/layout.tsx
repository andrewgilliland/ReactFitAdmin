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
    <div className="px-10 py-12">
      <div className="flex gap-2">
        {routes.map(({ name }, index) => (
          <Link
            key={index}
            className={`capitalize font-semibold text-pink-500 border-t-2 border-x-2 border-pink-500 px-4 py-2 rounded-t-md transition hover:bg-pink-500 hover:text-black ${
              pathname.includes(name) ? "bg-pink-500 text-black" : ""
            }`}
            href={`/dashboard/${name}`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="border-2 border-pink-500 rounded-tr rounded-b px-12 py-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
