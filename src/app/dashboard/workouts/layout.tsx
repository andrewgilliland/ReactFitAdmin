import { FC, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type WorkoutLayoutProps = {
  children: ReactNode;
};

const WorkoutLayout: FC<WorkoutLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Workouts</h1>
        <div>
          <Link href="/dashboard/exercises">
            <Button>All Workouts</Button>
          </Link>
          <Link className="ml-2" href="/dashboard/exercises/create">
            <Button>Create Workouts</Button>
          </Link>
        </div>
      </div>
      <div className="bg-black border-2 border-cyan-500 rounded mt-10 p-4 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default WorkoutLayout;
