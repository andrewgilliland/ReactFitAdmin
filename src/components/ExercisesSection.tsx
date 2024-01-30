"use client";
import { FC, useState } from "react";
import Input from "./Input";
import { Exercise } from "@/types";
import ExerciseCard from "./ExerciseCard";

type ExercisesSectionSearch = {
  exercises: Exercise[];
};

const ExercisesSection: FC<ExercisesSectionSearch> = ({ exercises }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="grid min-h-screen">
      <Input
        name="search"
        type="search"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        ))}
      </div>
    </section>
  );
};

export default ExercisesSection;
