"use client";
import { FC, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Exercise,
  FormState,
  Workout,
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroups,
} from "@/types";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";
import { updateWorkout } from "@/lib/actions";
import { useFormState } from "react-dom";

type UpdateWorkoutFormProps = {
  workout: Workout;
};

const UpdateWorkoutForm: FC<UpdateWorkoutFormProps> = ({ workout }) => {
  const initialFormState = {
    success: false,
    message: "",
    errors: undefined,
  } as FormState;

  //   const [formState, formAction] = useFormState(
  //     updateWorkout,
  //     initialFormState
  //   );

  // Todo: UI states for success and failure of update

  return (
    <div>
      <form action={updateWorkout} className="flex flex-col">
        <Input name="id" value={workout.id} className="hidden" />
        <Input name="name" value={workout.name} className="mt-3" />

        <Button className="mt-8" type="submit">
          Update
        </Button>
      </form>

      {/* <Button
        className="mt-8 text-red-400 border-red-400 hover:bg-red-400"
        onClick={() => deleteExercise(exercise.id as string)}
      >
        Delete Workout
      </Button> */}
    </div>
  );
};

export default UpdateWorkoutForm;
