import { FC } from "react";
import { Exercise } from "@/types";
import ExerciseCard from "./ExerciseCard";
import SearchInput from "./forms/SearchInput";

type ExercisesSectionSearch = {
  exercises: Exercise[];
};

const ExercisesSection: FC<ExercisesSectionSearch> = ({ exercises }) => {
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

export default ExercisesSection;
