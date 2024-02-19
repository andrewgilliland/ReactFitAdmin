import { FC } from "react";

import { getWorkoutById } from "@/lib/actions";

type WorkoutPageProps = {
  params: { id: string };
};

const WorkoutPage: FC<WorkoutPageProps> = async ({ params }) => {
  const workout = await getWorkoutById(params.id);

  return (
    <div className="min-h-96">
      <div className="flex justify-between items-center">
        <h2 className="capitalize font-semibold text-xl">{workout.name}</h2>
        <div className="text-sm text-gray-400">{`ID: ${params.id}`}</div>
      </div>
    </div>
  );
};

export default WorkoutPage;
