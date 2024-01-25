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
    <>
      {exercises.map((exercise, index) => (
        <Link
          href={`/dashboard/exercises/${exercise.id}`}
          as={`/dashboard/exercises/${exercise.name
            .replace(/\s/g, "-")
            .toLocaleLowerCase()}`}
          key={`${exercise.name}-${index}`}
        >
          <ExerciseCard key={`${exercise.name}-${index}`} exercise={exercise} />
        </Link>
      ))}
    </>
  );
};

export default Exercises;
