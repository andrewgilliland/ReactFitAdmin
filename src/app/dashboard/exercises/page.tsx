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
    <div className="bg-black grid gap-y-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {exercises.map((exercise, index) => (
        <Link
          href={`/dashboard/exercises/${exercise.id}`}
          as={`/dashboard/exercises/${exercise.id}`}
          key={`${exercise.name}-${index}`}
        >
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        </Link>
      ))}
    </div>
  );
};

export default Exercises;
