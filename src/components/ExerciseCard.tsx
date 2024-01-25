import { Exercise } from "@/types";
import { FC } from "react";

type ExerciseCardProps = {
  exercise: Exercise;
  onClick?: () => void;
};

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise, onClick }) => {
  const {
    name,
    difficulty,
    equipment,
    exerciseType,
    forceType,
    mechanics,
    targetMuscleGroup,
  } = exercise;

  return (
    <div
      onClick={() => onClick && onClick()}
      className="flex flex-col w-64 h-64 bg-white rounded-lg shadow-md"
    >
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{difficulty}</p>
        <p className="text-gray-600">{equipment}</p>
        <p className="text-gray-600">{exerciseType}</p>
        <p className="text-gray-600">{forceType}</p>
        <p className="text-gray-600">{mechanics}</p>
        <p className="text-gray-600">{targetMuscleGroup}</p>
      </div>
      <button className="flex items-center justify-center px-6 py-3 text-white bg-blue-600 rounded-b-lg">
        View
      </button>
    </div>
  );
};

export default ExerciseCard;
