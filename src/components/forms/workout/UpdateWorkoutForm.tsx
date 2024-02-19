"use client";
import { FC, FormEvent, useState } from "react";
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
import ExerciseInput from "../ExerciseInput";

type UpdateWorkoutFormProps = {
  workout: Workout;
  exercises: Exercise[];
};

const UpdateWorkoutForm: FC<UpdateWorkoutFormProps> = ({
  workout,
  exercises,
}) => {
  const [exerciseCount, setExerciseCount] = useState(workout.exercises.length);

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
        <Select
          name="difficulty"
          options={difficulty}
          value={workout.difficulty}
          className="mt-3"
        />

        <div className="mt-6">
          <div className="text-sm text-gray-500">Exercises</div>
          <div className="border-2 border-pink-400 rounded mt-1 p-4">
            {workout.exercises.map((_, index) => (
              <ExerciseInput
                key={index + 1}
                exerciseIndex={index + 1}
                exercises={exercises}
                value={workout.exercises[index].id as string}
              />
            ))}
            <Button
              className="mt-4"
              onClick={(event) => {
                event?.preventDefault();
                setExerciseCount(exerciseCount + 1);
              }}
            >
              Add Exercise
            </Button>
          </div>
        </div>

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
