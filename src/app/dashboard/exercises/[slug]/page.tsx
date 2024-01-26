"use client";

import EditExerciseForm from "@/components/forms/EditExerciseForm";
import { Exercise } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const [exercise, setExercise] = useState<Exercise>();

  const getExerciseById = async (id: string) => {
    const response = await fetch(`http://[::1]:8080/exercises/${id}`);
    const data = await response.json();
    console.log(data);
    setExercise(data);
  };

  useEffect(() => {
    getExerciseById(params.slug);
  }, [params.slug]);

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p>{exercise?.name}</p>
        <Link
          className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
          href="/dashboard/exercises"
        >
          Go Back
        </Link>
      </div>
      {exercise && <EditExerciseForm exercise={exercise} />}
    </div>
  );
}
