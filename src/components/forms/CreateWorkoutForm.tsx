import { difficulty } from "@/types";
import Input from "../Input";
import Select from "../Select";

const CreateWorkoutForm = () => {
  const createWorkout = async () => {
    "use server";
    console.log("createWorkout");
  };

  return (
    <form action={createWorkout}>
      <Input name="name" />
      <Input name="description" className="mt-3" />
      <Select name="difficulty" options={difficulty} className="mt-3" />
      <div className="border-2 border-pink-400 rounded mt-6 p-4">
        <Select name="exercise" options={["bench press", "push up", "squat"]} />
        <div className="mt-4">Set 1</div>
        <Input value={10} name="repetitions" type="number" className="mt-1" />
      </div>
    </form>
  );
};

export default CreateWorkoutForm;
