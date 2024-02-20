"use client";
import { getExercises } from "@/lib/actions";
import { Exercise } from "@/types";
import { ReactNode, createContext, useEffect, useState } from "react";

export const ExerciseContext = createContext<{ exercises: Exercise[] }>({
  exercises: [],
});

const Provider = ({ children }: { children: ReactNode }) => {
  const [exerciseOptions, setExerciseOptions] = useState<Exercise[]>([]);

  useEffect(() => {
    (async () => {
      const exercises = await getExercises();
      setExerciseOptions(exercises);
    })();
  }, []);

  return (
    <ExerciseContext.Provider value={{ exercises: exerciseOptions }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default Provider;
