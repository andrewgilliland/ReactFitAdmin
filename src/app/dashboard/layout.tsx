import Link from "next/link";
import { FC, ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
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
            className={`capitalize text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black`}
            href={`/dashboard/${name}`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="border-2 border-pink-400 rounded mt-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
