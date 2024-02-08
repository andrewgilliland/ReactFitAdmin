import CreateWorkoutForm from "@/components/forms/CreateWorkoutForm";

const CreateExercisePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Create Workout</h1>
      </div>
      <CreateWorkoutForm />
    </div>
  );
};

export default CreateExercisePage;
