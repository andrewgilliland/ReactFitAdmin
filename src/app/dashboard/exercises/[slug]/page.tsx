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
      {exercise ? (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold capitalize">
              {exercise.name}
            </h2>
            <div className="text-sm text-gray-400">{`ID: ${exercise.id}`}</div>
          </div>
          <UpdateExerciseForm exercise={exercise} />
        </>
      ) : (
        <div>Error fetching exercise</div>
      )}
    </div>
  );
};

export default ExercisePage;
