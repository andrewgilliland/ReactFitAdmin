"use client";
import ExerciseCard from "@/components/ExerciseCard";
import { Exercise } from "@/types/Exercise";
import { useEffect, useState } from "react";

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const getAllExercises = async () => {
    const response = await fetch("http://[::1]:8080/exercises");
    const data = await response.json();
    setExercises(data);
  };

  useEffect(() => {
    getAllExercises();
  }, []);

  return (
    <div className="grid min-h-screen place-items-center">
      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-6">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        ))}
      </div>
    </div>
  );
};

export default Exercises;
