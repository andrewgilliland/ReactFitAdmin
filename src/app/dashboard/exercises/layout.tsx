"use client";
import { FC, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type ExerciseLayoutProps = {
  children: ReactNode;
};

const ExerciseLayout: FC<ExerciseLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = [
    { name: "exercises" },
    { name: "workouts" },
    { name: "programs" },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Exercises</h1>
        <Link
          className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
          href="/dashboard/exercises/create"
        >
          Create Exercise
        </Link>
      </div>
      <div className="bg-black grid grid-cols-3 gap-20 border-2 border-cyan-500 rounded mt-10 p-12">
        {children}
      </div>
    </div>
  );
};

export default ExerciseLayout;
