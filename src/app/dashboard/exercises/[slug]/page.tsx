import { FC } from "react";
import { Exercise } from "@/types";
import EditExerciseForm from "@/components/forms/EditExerciseForm";

type ExercisePageProps = {
  params: { slug: string };
};

const ExercisePage: FC<ExercisePageProps> = async ({ params }) => {
  const response = await fetch(`http://[::1]:8080/exercises/${params.slug}`);
  const exercise: Exercise = await response.json();

  return (
    <div className="min-h-96">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">{exercise?.name}</h1>
      </div>
      {exercise && <EditExerciseForm exercise={exercise} />}
    </div>
  );
};

export default ExercisePage;
