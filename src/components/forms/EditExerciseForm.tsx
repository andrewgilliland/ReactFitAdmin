import { Exercise, difficulty } from "@/types";
import { ChangeEvent, FC, useState } from "react";
import Input from "../Input";
import Select from "../Select";

type EditExerciseForm = {
  exercise: Exercise;
};

const EditExerciseForm: FC<EditExerciseForm> = ({ exercise }) => {
  const [formData, setFormData] = useState<Exercise>(exercise);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        isEditable
      />
      <Select
        name="difficulty"
        options={difficulty}
        value={exercise.difficulty}
        onChange={handleChange}
        className="mt-3"
        isEditable
      />
    </div>
  );
};

export default EditExerciseForm;
