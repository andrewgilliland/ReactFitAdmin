"use client";
import { FC, useState } from "react";
import { FormState, Workout, difficulty } from "@/types";
import Input from "../../Input";
import Select from "../../Select";
import Button from "../../Button";
import { updateWorkout } from "@/lib/actions";
import { useFormState } from "react-dom";
import ExerciseInput from "../ExerciseInput";

type UpdateWorkoutFormProps = {
  workout: Workout;
};

const UpdateWorkoutForm: FC<UpdateWorkoutFormProps> = ({ workout }) => {
  // const [exerciseCount, setExerciseCount] = useState(workout.exercises.length);

  console.log("UpdateWorkoutForm: ", workout);

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

        {/* <div className="mt-6">
          <div className="text-sm text-gray-500">Exercises</div>
          <div className="border-2 border-pink-400 rounded mt-1 p-4">
            {workout.exercises.map((exercise, index) => (
              <ExerciseInput
                key={exercise.id}
                exerciseIndex={index + 1}
                value={workout.exercises[index].id as string}
                sets={exercise.sets}
              />
            ))}
            <div className="flex gap-4 mt-4">
              <Button
                onClick={(event) => {
                  event?.preventDefault();
                  setExerciseCount(exerciseCount + 1);
                }}
              >
                Add Exercise
              </Button>
              <Button
                onClick={(event) => {
                  event?.preventDefault();
                }}
              >
                Add Superset
              </Button>
            </div>
          </div>
        </div> */}

        <Button className="mt-8" type="submit">
          Update
        </Button>
      </form>

      {/* <Button
        className="mt-8 text-red-400 border-red-400 hover:bg-red-400"
        onClick={() => deleteWorkout(workout.id as string)}
      >
        Delete Workout
      </Button> */}
    </div>
  );
};

export default UpdateWorkoutForm;
