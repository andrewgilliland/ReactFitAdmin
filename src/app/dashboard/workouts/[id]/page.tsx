import { FC } from "react";
import UpdateExerciseForm from "@/components/forms/UpdateExerciseForm";
import { getExerciseById } from "@/lib/actions";

type WorkoutPageProps = {
  params: { id: string };
};

const WorkoutPage: FC<WorkoutPageProps> = async ({ params }) => {
  //   const exercise = await getExerciseById(params.slug);

  return (
    <div className="min-h-96">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">{"Sweet"}</h2>
        <div className="text-sm text-gray-400">{`ID: ${params.id}`}</div>
      </div>
    </div>
  );
};

export default WorkoutPage;
