import { FC, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type WorkoutLayoutProps = {
  children: ReactNode;
};

const WorkoutLayout: FC<WorkoutLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="text-xl font-semibold">Workouts</h1>
        <div className="flex">
          <Link href="/dashboard/workouts">
            <Button>All Workouts</Button>
          </Link>
          <Link className="ml-2" href="/dashboard/workouts/create">
            <Button>Create Workouts</Button>
          </Link>
        </div>
      </div>
      <div className="mt-10 rounded-xl border-2 border-neutral-800 bg-black p-4 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default WorkoutLayout;
