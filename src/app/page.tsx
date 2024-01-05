"use client";
import { Exercise } from "@/lib/types/Exercises";
import { useEffect, useState } from "react";

const Home = () => {
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
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-xl">React Fit</h1>
        <button
          className="bg-pink-400 text-black font-semibold ml-12 px-4 py-2 rounded-md"
          onClick={() => createExercise()}
        >
          Create Exercise
        </button>
      </div>
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

export default Home;
