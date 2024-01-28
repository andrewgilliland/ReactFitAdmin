import ExerciseCard from "@/components/ExerciseCard";
import { Exercise } from "@/types/Exercise";

const ExercisesPage = async () => {
  const response = await fetch("http://[::1]:8080/exercises");
  const exercises: Exercise[] = await response.json();

  return (
    <div>
      <div className="grid min-h-screen">
        <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
          {exercises.map((exercise, index) => (
            <ExerciseCard
              key={`${exercise.name}-${index}`}
              exercise={exercise}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExercisesPage;
