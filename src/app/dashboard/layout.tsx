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
            key={`${name}-${index}`}
            className={`capitalize font-semibold  border-t-2 border-x-2 border-cyan-400 px-4 py-2 rounded-t-md transition hover:bg-cyan-400 hover:text-black ${
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
      <div className="border-2 border-cyan-400 rounded-tr rounded-b px-12 py-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
