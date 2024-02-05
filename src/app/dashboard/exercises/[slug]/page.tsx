import { FC } from "react";
import { Exercise } from "@/types";
import UpdateExerciseForm from "@/components/forms/UpdateExerciseForm";

type ExercisePageProps = {
  params: { slug: string };
};

const ExercisePage: FC<ExercisePageProps> = async ({ params }) => {
  const response = await fetch(`http://[::1]:8080/exercise/${params.slug}`);
  const exercise: Exercise = await response.json();

  return (
    <div className="min-h-96">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">{exercise.name}</h2>
        <div className="text-sm text-gray-400">{`ID: ${exercise.id}`}</div>
      </div>
      {exercise && <UpdateExerciseForm exercise={exercise} />}
    </div>
  );
};

export default ExercisePage;
