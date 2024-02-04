"use client";
import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
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
import Input from "../Input";
import Select from "../Select";
import FieldSet from "../FieldSet";
import Button from "../Button";
import { useRouter } from "next/navigation";

type EditExerciseFormProps = {
  exercise: Exercise;
};

const EditExerciseForm: FC<EditExerciseFormProps> = ({ exercise }) => {
  const [formData, setFormData] = useState<Exercise>(exercise);
  const router = useRouter();

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

  const editExercise = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);

    // const response = await fetch("http://[::1]:8080/exercise", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const data = await response.json();
    // console.log(data);
  };

  const deleteExercise = async (id: string) => {
    const response = await fetch(`http://[::1]:8080/exercises/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    router.push("/dashboard/exercises");
  };

  return (
    <div>
      <form onSubmit={editExercise} className="flex flex-col">
        <Input name="name" value={formData.name} />
        <Select
          name="difficulty"
          options={difficulty}
          value={exercise.difficulty}
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
          options={muscleGroups}
          value={formData.targetMuscleGroup}
          onChange={handleChange}
          className="mt-3"
        />
        <FieldSet
          name="secondaryMuscles"
          options={muscleGroups}
          value={formData.secondaryMuscles}
          className="mt-3"
          onChange={handleFieldSetChange}
        />
        <Button className="mt-8" type="submit">
          Edit
        </Button>
      </form>
      <Button
        className="mt-8 text-red-400 border-red-400 hover:bg-red-400"
        onClick={() => {
          deleteExercise(formData.id as string);
        }}
      >
        Delete Exercise
      </Button>
    </div>
  );
};

export default EditExerciseForm;
