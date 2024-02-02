// "use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useFormState } from "react-dom";
import Input from "@/components/Input";
import Select from "@/components/Select";
import {
  Exercise,
  MuscleGroup,
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroups,
} from "@/types";
import FieldSet from "../FieldSet";
import { useRouter } from "next/navigation";
import { createExerciseAction } from "@/lib/actions";

const CreateExerciseForm = () => {
  const initialState = { message: null };
  // const [state, formAction] = useFormState(createExerciseAction, initialState);

  // const [formData, setFormData] = useState<Exercise>({
  //   name: "",
  //   difficulty: "beginner",
  //   equipment: "bodyweight",
  //   exerciseType: "strength",
  //   forceType: "push",
  //   mechanics: "compound",
  //   secondaryMuscles: [],
  //   targetMuscleGroup: "lats",
  // });
  // const router = useRouter();

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  // const handleFieldSetChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   e.target.checked
  //     ? setFormData({
  //         ...formData,
  //         secondaryMuscles: [
  //           ...formData.secondaryMuscles,
  //           e.target.name as MuscleGroup,
  //         ],
  //       })
  //     : setFormData({
  //         ...formData,
  //         secondaryMuscles: formData.secondaryMuscles.filter(
  //           (item) => item !== e.target.name
  //         ),
  //       });
  // };

  // const createExercise = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // const formData = new FormData(event.currentTarget);

  //   const response = await fetch("http://[::1]:8080/exercise", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const data = await response.json();
  //   console.log(data);
  //   router.push("/dashboard/exercises");
  // };

  return (
    <form
      // onSubmit={createExercise}
      action={createExerciseAction}
      className="flex flex-col"
    >
      <Input name="name" />
      <Select name="difficulty" options={difficulty} className="mt-3" />
      <Select name="equipment" options={equipment} className="mt-3" />
      <Select name="exerciseType" options={exerciseType} className="mt-3" />
      <Select name="forceType" options={forceType} className="mt-3" />
      <Select name="mechanics" options={mechanics} className="mt-3" />
      <Select
        name="targetMuscleGroup"
        options={muscleGroups}
        className="mt-3"
      />
      <FieldSet
        name="secondaryMuscles"
        options={muscleGroups}
        // value={formData.secondaryMuscles}
        className="mt-3"
      />
      <button
        type="submit"
        className="text-pink-500 border border-pink-500 mt-8 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
      >
        Create
      </button>
    </form>
  );
};

export default CreateExerciseForm;
