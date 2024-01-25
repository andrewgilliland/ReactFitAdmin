"use client";
import ExerciseCard from "@/components/ExerciseCard";
import { Exercise } from "@/types/Exercise";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Exercises = () => {
  // const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  // const { slug } = router.query;
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const getAllExercises = async () => {
    const response = await fetch("http://[::1]:8080/exercises");
    const data = await response.json();
    setExercises(data);
  };

  useEffect(() => {
    getAllExercises();
  }, []);

  // console.log(slug);

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
          <Link
            href={`/dashboard/exercises/${exercise.name
              .replace(/\s/g, "-")
              .toLocaleLowerCase()}`}
            as={`/dashboard/exercises/${exercise.name
              .replace(/\s/g, "-")
              .toLocaleLowerCase()}`}
            key={`${exercise.name}-${index}`}
          >
            <ExerciseCard
              key={`${exercise.name}-${index}`}
              exercise={exercise}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exercises;
