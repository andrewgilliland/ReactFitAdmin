"use client";
import { Exercise } from "@/lib/types/Exercises";
import Link from "next/link";
import { useEffect, useState } from "react";

const Exercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const getAllExercises = async () => {
    const response = await fetch("http://[::1]:8080/exercises");
    const data = await response.json();
    setExercises(data);
  };

  const createExercise = async () => {
    const response = await fetch("http://[::1]:8080/exercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Bench Press",
        equipment: "Barbell",
        targetMuscleGroup: "Chest",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getAllExercises();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-32 bg-black text-white">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Exercises</h1>
        <Link
          className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
          href="/dashboard/exercises/create"
        >
          Create Exercise
        </Link>
      </div>
      <div className="mt-8"></div>
      <div className="border border-white rounded-md mt-12">
        {exercises.map(({ id, name, equipment, targetMuscleGroup }, index) => (
          <div
            key={id}
            className={`flex ${index ? "border-t border-white" : ""}`}
          >
            <div className="flex-1 text-sm">{name}</div>
            <div className="flex-1 text-sm">{equipment}</div>
            <div className="flex-1 text-sm">{targetMuscleGroup}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Exercises;
