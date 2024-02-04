import ExerciseCard from "@/components/ExerciseCard";
import SearchInput from "@/components/forms/SearchInput";
import getExercises from "@/lib/actions/exercises";
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
      <SearchInput className="mb-10" name="exercises" />
      <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};

export default ExercisesPage;
