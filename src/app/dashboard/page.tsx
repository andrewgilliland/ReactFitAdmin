"use client";
import Link from "next/link";

const Dashboard = () => {
  const routes = [
    { name: "exercises" },
    { name: "workouts" },
    { name: "programs" },
  ];

  return (
    <main className="flex min-h-screen flex-col p-32 bg-black text-white">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-xl">React Fit - Dashboard</h1>
      </div>
      <div className="flex flex-col mt-4">
        {routes.map(({ name }, index) => (
          <Link
            key={index}
            className={`capitalize text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black ${
              index && "mt-2"
            }`}
            href={`/dashboard/${name}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
