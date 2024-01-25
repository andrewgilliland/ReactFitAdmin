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
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Exercises</h1>
        <Link
          className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
          href="/dashboard/exercises/create"
        >
          Create Exercise
        </Link>
      </div>
      <div className="bg-black grid grid-cols-3 gap-20 border-2 border-cyan-500 rounded mt-10 p-12">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
          // <div
          //   key={id}
          //   className={`flex flex-col border-2 border-cyan-500 rounded bg-black gap-8`}
          // >
          //   <div className="flex-1 text-sm">{name}</div>
          //   <div className="flex-1 text-sm">{equipment}</div>
          //   <div className="flex-1 text-sm">{targetMuscleGroup}</div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
