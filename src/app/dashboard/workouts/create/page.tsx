import CreateWorkoutForm from "@/components/forms/CreateWorkoutForm";
import { getExercises } from "@/lib/actions";

const CreateExercisePage = async () => {
  const exercises = await getExercises();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Create Workout</h1>
      </div>
      <CreateWorkoutForm exercises={exercises} />
    </div>
  );
};

export default CreateExercisePage;
