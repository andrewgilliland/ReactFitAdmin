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
      className="flex flex-col w-64 h-64 bg-black border-2 border-cyan-500 rounded-lg"
    >
      <div className="flex flex-col items-starts justify-start flex-1 p-6">
        <h2 className="text-xl text-pink-500 font-bold">{name}</h2>
        <p className="text-gray-600">{difficulty}</p>
        <p className="text-gray-600">{equipment}</p>
        <p className="text-gray-600">{exerciseType}</p>
        <p className="text-gray-600">{forceType}</p>
        <p className="text-gray-600">{mechanics}</p>
        <p className="text-gray-600">{targetMuscleGroup}</p>
      </div>
    </div>
  );
};

export default ExerciseCard;
