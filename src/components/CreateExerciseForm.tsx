"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/components/Input";
import Select from "@/components/Select";
import {
  Exercise,
  difficulty,
  equipment,
  exerciseType,
  forceType,
  mechanics,
  muscleGroup,
} from "@/types/Exercises";

const CreateExerciseForm = () => {
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

  const createExercise = async (e: FormEvent) => {
    e.preventDefault();
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
    <form className="flex flex-col" action="">
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
      <button
        type="submit"
        className="text-pink-500 border border-pink-500 mt-8 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
        onClick={createExercise}
      >
        Create
      </button>
    </form>
  );
};

export default CreateExerciseForm;
