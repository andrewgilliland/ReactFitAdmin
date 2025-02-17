import { FC, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type ExerciseLayoutProps = {
  children: ReactNode;
};

const ExerciseLayout: FC<ExerciseLayoutProps> = ({ children }) => {
  // Todo: Make common layout component for exercises, workouts, and programs
  return (
    <div className="mx-auto my-24 flex max-w-lg flex-col">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Link href="/exercises">
            <Button theme="secondary">All Exercises</Button>
          </Link>
          <Link className="ml-2" href="/exercises/create">
            <Button>Create Exercise</Button>
          </Link>
        </div>
      </div>
      <div className="mt-10 rounded-xl border-2 border-neutral-800 p-4 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default ExerciseLayout;
