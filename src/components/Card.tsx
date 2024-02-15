import { Exercise, Workout } from "@/types";
import Link from "next/link";
import { FC, ReactNode } from "react";

type CardWrapperProps = {
  id: string;
  name: string;
  children: ReactNode;
};

const CardWrapper: FC<CardWrapperProps> = ({ id, name, children }) => {
  return (
    <div className="relative flex flex-col h-80 bg-black border-2 border-cyan-500 rounded-lg group flex-1 hover:grow-[1.2] transition-all duration-500 min-w-48 max-w-64">
      <Link
        href={`/dashboard/exercises/${id}`}
        as={`/dashboard/exercises/${id}`}
        key={`${name}-${id}`}
      >
        {/* h-80 (320px) - border-2-y (4px) = 316px */}
        <div className="h-[316px]">
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-starts justify-start flex-1 max-w-48 p-6">
            <h2 className="text-xl text-pink-500 font-bold leading-tight">
              {name}
            </h2>
            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
              <div className="text-gray-600 overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transition duration-1000">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

type ExerciseCardProps = {
  exercise: Exercise;
  workout?: never;
};

type WorkoutCardProps = {
  workout: Workout;
  exercise?: never;
};

type CardProps = ExerciseCardProps | WorkoutCardProps;

const Card: FC<CardProps> = ({ exercise, workout }) => {
  if (exercise) {
    const {
      id,
      name,
      difficulty,
      equipment,
      exerciseType,
      forceType,
      mechanics,
      targetMuscleGroup,
    } = exercise;

    return (
      <CardWrapper id={id!} name={name}>
        <p>{difficulty}</p>
        <p>{equipment}</p>
        <p>{exerciseType}</p>
        <p>{forceType}</p>
        <p>{mechanics}</p>
        <p>{targetMuscleGroup}</p>{" "}
      </CardWrapper>
    );
  } else if (workout) {
    const { id, name, difficulty, description, exercises } = workout;
    return (
      <CardWrapper id={id!} name={name}>
        <p>{description}</p>
        <p>{difficulty}</p>
      </CardWrapper>
    );
  }
};

export default Card;
