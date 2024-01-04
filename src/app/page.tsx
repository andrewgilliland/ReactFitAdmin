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

  useEffect(() => {
    getAllExercises();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-32 bg-black text-white">
      <h1 className="font-semibold text-xl underline">React Fit</h1>
      <div className="border border-white rounded-md mt-12">
        {exercises.map(({ id, name, equipment, targetMuscleGroup }, index) => {
          return (
            <div
              key={id}
              className={`flex ${index ? "border-t border-white" : ""}`}
            >
              <div className="flex-1 text-sm">{name}</div>
              <div className="flex-1 text-sm">{equipment}</div>
              <div className="flex-1 text-sm">{targetMuscleGroup}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
