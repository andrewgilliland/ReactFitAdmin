"use client";
import { ChangeEvent, FC, useState } from "react";
import Input from "./Input";
import { Exercise } from "@/types";
import ExerciseCard from "./ExerciseCard";

type ExercisesSectionSearch = {
  exercises: Exercise[];
};

const ExercisesSection: FC<ExercisesSectionSearch> = ({ exercises }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredExercises, setFilteredExercises] =
    useState<Exercise[]>(exercises);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setFilteredExercises(
      event.target.value
        ? exercises.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : exercises
    );
  };

  return (
    <section className=" min-h-screen">
      <Input
        name="search"
        type="search"
        value={searchValue}
        onChange={onSearch}
      />
      <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
        {filteredExercises.map((exercise, index) => (
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};

export default ExercisesSection;
