import { FC } from "react";
import { ChevronRightIcon, StarIcon } from "@heroicons/react/24/outline";
import { Exercise } from "@/types";

type ExerciseCardProps = {
  exercise: Exercise;
};

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {
  const diff = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
  }[exercise.difficulty];

  return (
    <div className="group flex justify-between items-center bg-neutral-900 p-4 rounded-xl">
      <div>
        <h3 className="capitalize font-semibold text-neutral-100">
          {exercise.name}
        </h3>
        <div className="flex gap-4 mt-1">
          <div className="flex justify-center items-center">
            {[...Array(3)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-4 w-4 text-orange-600 stroke-2 ${
                  diff > index && "fill-orange-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <ChevronRightIcon className="h-5 w-5 text-neutral-100 stroke-2 group-hover:translate-x-1 transition-transform" />
    </div>
  );
};

export default ExerciseCard;
