import { FC } from "react";
import UpdateExerciseForm from "@/components/forms/exercise/UpdateExerciseForm";
import { getExerciseById } from "@/lib/actions";

type ExercisePageProps = {
  params: { slug: string };
};

const ExercisePage: FC<ExercisePageProps> = async ({ params }) => {
  const exercise = await getExerciseById(params.slug);

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
