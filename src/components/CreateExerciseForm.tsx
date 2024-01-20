"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "@/components/Input";

const CreateExerciseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    equipment: "",
    targetMuscleGroup: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
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
      <Input
        name="equipment"
        value={formData.equipment}
        onChange={handleChange}
        className="mt-3"
      />
      <Input
        name="targetMuscleGroup"
        value={formData.targetMuscleGroup}
        onChange={handleChange}
        className="mt-3"
      />
      <button
        type="submit"
        className="text-pink-500 border border-pink-500 mt-4 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
        onClick={createExercise}
      >
        Create
      </button>
    </form>
  );
};

export default CreateExerciseForm;
