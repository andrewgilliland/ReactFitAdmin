import CreateWorkoutForm from "@/components/forms/workout/CreateWorkoutForm";

const CreateExercisePage = async () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-xl font-semibold">Create Workout</h1>
      </div>
      <CreateWorkoutForm />
    </div>
  );
};

export default CreateExercisePage;
