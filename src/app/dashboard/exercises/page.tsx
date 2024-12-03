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
    <section className="min-h-screen">
      <div className="md:w-1/2 lg:w-2/5 mx-auto">
        <div className="flex justify-between">
          <SearchInput className="mb-10" name="exercises" />
          <div className="text-gray-400 font-semibold">
            {exercises.length} Exercises
          </div>
        </div>
        <section className="bg-neutral-800 rounded-xl mt-6 p-4">
          <div className="grid gap-4">
            {exercises.map(
              (exercise, index) =>
                exercise && <ExerciseCard exercise={exercise} key={index} />
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ExercisesPage;
