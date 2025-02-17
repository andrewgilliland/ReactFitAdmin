import { FC, ReactNode } from "react";
import Link from "next/link";
import Button from "@/components/Button";

type WorkoutLayoutProps = {
  children: ReactNode;
};

const ProgramsLayout: FC<WorkoutLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto my-24 flex max-w-lg flex-col">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Link href="/programs">
            <Button theme="secondary">All Programs</Button>
          </Link>
          <Link className="ml-2" href="/programs/create">
            <Button>Create Program</Button>
          </Link>
        </div>
      </div>
      <div className="mt-10 rounded-xl border-2 border-neutral-800 bg-black p-4 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default ProgramsLayout;
