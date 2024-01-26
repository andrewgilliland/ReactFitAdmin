"use client";
import ExerciseCard from "@/components/ExerciseCard";
import { Exercise } from "@/types/Exercise";
import Link from "next/link";
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
      <div className="flex flex-wrap justify-center w-full max-w-6xl border border-red-500 gap-4">
        {exercises.slice(0, 4).map((exercise, index) => (
          // <Link
          //   href={`/dashboard/exercises/${exercise.id}`}
          //   as={`/dashboard/exercises/${exercise.id}`}
          //   key={`${exercise.name}-${index}`}
          // >

          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />

          // </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
