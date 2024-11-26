import { Workout } from "@/types";
import {
  StarIcon,
  ForwardIcon,
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
    <div className="group flex justify-between items-center bg-neutral-900 p-4 rounded-xl cursor-pointer">
      <div>
        <h3 className="font-bold text-base text-neutral-200">{workout.name}</h3>
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
          <div className="flex items-center">
            <ChartBarIcon className="h-4 w-4 text-blue-600 stroke-2" />
            <span className="font-semibold text-sm text-neutral-200 ml-1">
              {workout.exercises.length} Exercises
            </span>
          </div>
        </div>
      </div>
      <ChevronRightIcon className="h-5 w-5 text-neutral-200 stroke-2 group-hover:translate-x-1 transition-transform" />
    </div>
  );
};

export default WorkoutCard;
