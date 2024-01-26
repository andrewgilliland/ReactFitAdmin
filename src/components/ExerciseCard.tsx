import { Exercise } from "@/types";
import Link from "next/link";
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
      className="relative flex flex-col h-80 bg-black border-2 border-cyan-500 rounded-lg group flex-1 hover:grow-[1.2] transition-all duration-500 min-w-48 max-w-64"
    >
      <Link
        href={`/dashboard/exercises/${exercise.id}`}
        as={`/dashboard/exercises/${exercise.id}`}
        key={`${exercise.name}-${1}`}
      >
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-starts justify-start flex-1 max-w-48 p-6">
          <h2 className="text-xl text-pink-500 font-bold leading-tight">
            {name}
          </h2>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
            <div className="overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition duration-700">
              <p className="text-gray-600">{difficulty}</p>
              <p className="text-gray-600">{equipment}</p>
              <p className="text-gray-600">{exerciseType}</p>
              <p className="text-gray-600">{forceType}</p>
              <p className="text-gray-600">{mechanics}</p>
              <p className="text-gray-600">{targetMuscleGroup}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExerciseCard;
