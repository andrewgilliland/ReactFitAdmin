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
        <h1 className="font-semibold text-xl">{exercise?.name}</h1>
      </div>
      {exercise && <UpdateExerciseForm exercise={exercise} />}
    </div>
  );
};

export default ExercisePage;
