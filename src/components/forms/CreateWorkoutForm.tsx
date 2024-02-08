import { difficulty } from "@/types";
import Input from "../Input";
import Select from "../Select";

const CreateWorkoutForm = () => {
  const createWorkout = () => {
    console.log("createWorkout");
  };

  return (
    <form action={createWorkout}>
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />
      <Select name="exercise" options={["bench press", "push up", "squat"]} />
    </form>
  );
};

export default CreateWorkoutForm;
