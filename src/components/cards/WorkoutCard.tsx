import { Workout } from "@/types";
import {
  StarIcon,
  ChevronRightIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const WorkoutCard = ({ workout }: { workout: Workout }) => {
  const diff = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
  }[workout.difficulty];

  return (
    <div className="group flex cursor-pointer items-center justify-between rounded-xl bg-neutral-900 p-4 shadow-xl">
      <div>
        <h3 className="text-base font-bold text-neutral-100">{workout.name}</h3>
        <div className="mt-1 flex gap-4">
          <div className="flex items-center justify-center">
            {[...Array(3)].map((_, index) => (
              <StarIcon
                key={index}
                className={`h-4 w-4 stroke-2 text-orange-600 ${
                  diff > index && "fill-orange-600"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center">
            <ChartBarIcon className="h-4 w-4 stroke-2 text-blue-600" />
            <span className="ml-1 text-sm font-semibold text-neutral-400">
              {workout.exercises.length} Exercises
            </span>
          </div>
        </div>
      </div>
      <ChevronRightIcon className="h-5 w-5 stroke-2 text-neutral-100 transition-transform group-hover:translate-x-1" />
    </div>
  );
};

export default WorkoutCard;
