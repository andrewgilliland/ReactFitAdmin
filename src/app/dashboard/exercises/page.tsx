"use client";
import ExerciseCard from "@/components/ExerciseCard";
import FieldSet from "@/components/FieldSet";
import { MuscleGroup, muscleGroups } from "@/types";
import { Exercise } from "@/types/Exercise";
import { ChangeEvent, useEffect, useState } from "react";
import { set } from "zod";

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [filterOptions, setFilterOptions] = useState<MuscleGroup[]>([]);

  const getAllExercises = async () => {
    const response = await fetch("http://[::1]:8080/exercises");
    const data = await response.json();
    setExercises(data);
  };

  const handleFieldSetChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setFilterOptions([...filterOptions, e.target.name as MuscleGroup])
      : setFilterOptions(
          filterOptions.filter((item) => item !== e.target.name)
        );
  };

  useEffect(() => {
    getAllExercises();
  }, []);

  useEffect(() => {
    console.log(filterOptions);
  }, [filterOptions]);

  return (
    <div className="grid min-h-screen">
      <div>
        <h2 className="border-b-2 border-cyan-400">Filter</h2>

        <FieldSet
          name="Primary Muscle Group"
          options={muscleGroups}
          onChange={handleFieldSetChange}
          className="mt-2"
        />
      </div>
      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-6 mt-4">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
