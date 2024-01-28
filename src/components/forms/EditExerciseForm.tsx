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

type EditExerciseFormProps = {
  exercise: Exercise;
};

const EditExerciseForm: FC<EditExerciseFormProps> = ({ exercise }) => {
  const [formData, setFormData] = useState<Exercise>(exercise);

  useEffect(() => {
    console.log(exercise);
  }, [exercise]);

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

  return (
    <form onSubmit={editExercise} className="flex flex-col">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        isDisabled
      />
      <Select
        name="difficulty"
        options={difficulty}
        value={exercise.difficulty}
        onChange={handleChange}
        className="mt-3"
        isDisabled
      />
      <Select
        name="equipment"
        options={equipment}
        value={formData.equipment}
        onChange={handleChange}
        className="mt-3"
        isDisabled
      />
      <Select
        name="exerciseType"
        options={exerciseType}
        value={formData.exerciseType}
        onChange={handleChange}
        className="mt-3"
        isDisabled
      />

      <Select
        name="forceType"
        options={forceType}
        value={formData.forceType}
        onChange={handleChange}
        className="mt-3"
        isDisabled
      />
      <Select
        name="mechanics"
        options={mechanics}
        value={formData.mechanics}
        onChange={handleChange}
        className="mt-3"
        isDisabled
      />
      <Select
        name="targetMuscleGroup"
        options={muscleGroups}
        value={formData.targetMuscleGroup}
        onChange={handleChange}
        className="mt-3"
        isDisabled
      />
      <FieldSet
        name="secondaryMuscles"
        options={muscleGroups}
        className="mt-3"
        onChange={handleFieldSetChange}
      />
      <Button className="mt-8" type="submit">
        Edit
      </Button>
    </form>
  );
};

export default EditExerciseForm;
