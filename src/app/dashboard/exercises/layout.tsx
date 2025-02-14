import { FC, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type ExerciseLayoutProps = {
  children: ReactNode;
};

const ExerciseLayout: FC<ExerciseLayoutProps> = ({ children }) => {
  // Todo: Make common layout component for exercises, workouts, and programs
  return (
    <div className="mx-auto flex max-w-lg flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex">
          <Link href="/dashboard/exercises">
            <Button theme="secondary">All Exercises</Button>
          </Link>
          <Link className="ml-2" href="/dashboard/exercises/create">
            <Button>Create Exercise</Button>
          </Link>
        </div>
      </div>
      <div className="mt-10 max-w-lg rounded-xl border-2 border-neutral-800 p-4 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default ExerciseLayout;
