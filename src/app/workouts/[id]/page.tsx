import { FC } from "react";
import { getExercises, getWorkoutById } from "@/lib/actions";
import UpdateWorkoutForm from "@/components/forms/workout/UpdateWorkoutForm";

type WorkoutPageProps = {
  params: { id: string };
};

const WorkoutPage: FC<WorkoutPageProps> = async ({ params }) => {
  const workout = await getWorkoutById(params.id);
  const exercises = await getExercises();

  return (
    <div className="min-h-96">
      <div className="flex justify-between items-center">
        <h2 className="capitalize font-semibold text-xl">{workout.name}</h2>
        <div className="text-sm text-gray-400">{`ID: ${params.id}`}</div>
      </div>
      {workout && <UpdateWorkoutForm workout={workout} />}
    </div>
  );
};

export default WorkoutPage;
