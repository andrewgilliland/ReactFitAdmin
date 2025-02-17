import { FC } from "react";
import SearchInput from "@/components/forms/SearchInput";
import { getExercises } from "@/lib/actions";
import { Exercise } from "@/types";
import ExerciseCard from "@/components/cards/ExerciseCard";

type ExecisesPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ExercisesPage: FC<ExecisesPageProps> = async ({ searchParams }) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const exercises = (await getExercises(search)) as Exercise[];

  return (
    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="flex justify-between">
          <SearchInput className="mb-10" name="exercises" />
          <div className="font-semibold text-gray-400">
            {exercises.length} Exercises
          </div>
        </div>
        <section className="mt-6 rounded-xl bg-neutral-800 p-4">
          <div className="grid gap-4">
            {exercises.map(
              (exercise, index) =>
                exercise && <ExerciseCard exercise={exercise} key={index} />,
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExercisesPage;
