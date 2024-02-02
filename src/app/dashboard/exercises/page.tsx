import ExercisesSection from "@/components/ExercisesSection";
import { Exercise } from "@/types/Exercise";

const ExercisesPage = async () => {
  const response = await fetch("http://[::1]:8080/exercises");
  const exercises: Exercise[] = await response.json();

  return <ExercisesSection exercises={exercises} />;
};

export default ExercisesPage;
