"use client";
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
  muscleGroup,
} from "@/types";
import FieldSet from "./FieldSet";
import { createExerciseThing } from "@/lib/actions/createExercise";

const CreateExerciseForm = () => {
  const initialState = { message: null };
  const [state, formAction] = useFormState(createExerciseThing, initialState);

  const [formData, setFormData] = useState<Exercise>({
    name: "",
    difficulty: "beginner",
    equipment: "bodyweight",
    exerciseType: "strength",
    forceType: "push",
    mechanics: "compound",
    secondaryMuscles: [],
    targetMuscleGroup: "lats",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleFieldSetChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked
      ? setFormData({
          ...formData,
          secondaryMuscles: [
            ...formData.secondaryMuscles,
            e.target.name as MuscleGroup,
          ],
        })
      : setFormData({
          ...formData,
          secondaryMuscles: formData.secondaryMuscles.filter(
            (item) => item !== e.target.name
          ),
        });
  };

  const createExercise = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget);

    console.log(formData);

    // const response = await fetch("http://[::1]:8080/exercise", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: "Bench Press",
    //     equipment: "Barbell",
    //     targetMuscleGroup: "Chest",
    //   }),
    // });
    // const data = await response.json();
    // console.log(data);
  };

  return (
    <form
      action={formAction}
      //   onSubmit={createExercise}
      className="flex flex-col"
    >
      <Input name="name" value={formData.name} onChange={handleChange} />
      <Select
        name="difficulty"
        options={difficulty}
        value={formData.difficulty}
        onChange={handleChange}
        className="mt-3"
      />
      <Select
        name="equipment"
        options={equipment}
        value={formData.equipment}
        onChange={handleChange}
        className="mt-3"
      />
      <Select
        name="exerciseType"
        options={exerciseType}
        value={formData.exerciseType}
        onChange={handleChange}
        className="mt-3"
      />
      <Select
        name="forceType"
        options={forceType}
        value={formData.forceType}
        onChange={handleChange}
        className="mt-3"
      />
      <Select
        name="mechanics"
        options={mechanics}
        value={formData.mechanics}
        onChange={handleChange}
        className="mt-3"
      />
      <Select
        name="targetMuscleGroup"
        options={muscleGroup}
        value={formData.targetMuscleGroup}
        onChange={handleChange}
        className="mt-3"
      />
      <FieldSet
        name="secondaryMucles"
        options={muscleGroup}
        className="mt-3"
        onChange={handleFieldSetChange}
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
