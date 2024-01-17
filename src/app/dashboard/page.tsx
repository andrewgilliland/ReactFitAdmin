"use client";
import Link from "next/link";

const Dashboard = () => {
  const routes = [
    { name: "exercises" },
    { name: "workouts" },
    { name: "programs" },
  ];

  return (
    <main className="flex">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-xl">React Fit - Dashboard</h1>
      </div>
      <div className="flex flex-col mt-4"></div>
    </main>
  );
};

export default Dashboard;
