"use client";

import EditExerciseForm from "@/components/forms/EditExerciseForm";
import { Exercise } from "@/types";
import { useEffect, useState } from "react";

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const [exercise, setExercise] = useState<Exercise>();

  const getExerciseById = async (id: string) => {
    const response = await fetch(`http://[::1]:8080/exercises/${id}`);
    const data: Exercise = await response.json();
    setExercise(data);
  };

  useEffect(() => {
    getExerciseById(params.slug);
  }, [params.slug]);

  return (
    <div className="min-h-96">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">{exercise?.name}</h1>
      </div>
      {exercise && <EditExerciseForm exercise={exercise} />}
    </div>
  );
}
