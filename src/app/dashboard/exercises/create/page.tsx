import CreateExerciseForm from "@/components/forms/CreateExerciseForm";

const CreateExercisePage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl">Create Exercise</h1>
      </div>
      <CreateExerciseForm />
    </div>
  );
};

export default CreateExercisePage;
