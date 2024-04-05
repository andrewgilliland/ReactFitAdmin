import Card from "@/components/Card";
import SearchInput from "@/components/forms/SearchInput";
import { getExercises } from "@/lib/actions";
import { FC } from "react";

type ExecisesPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ExercisesPage: FC<ExecisesPageProps> = async ({ searchParams }) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const exercises = await getExercises(search);

  return (
    <section className="min-h-screen">
      <div className="flex justify-between">
        <SearchInput className="mb-10" name="exercises" />
        <div className="text-gray-400 font-semibold">
          {exercises.length} Exercises
        </div>
      </div>
      <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
        {exercises.map(
          (exercise) =>
            exercise && <Card key={exercise.id} exercise={exercise} />
        )}
      </div>
    </section>
  );
};

export default ExercisesPage;
