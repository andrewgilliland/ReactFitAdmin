import ExercisesSection from "@/components/ExercisesSection";
import getExercises from "@/lib/actions/exercises";
import { FC } from "react";

type ExecisesPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const ExercisesPage: FC<ExecisesPageProps> = async ({ searchParams }) => {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const exercises = await getExercises(search);

  return <ExercisesSection exercises={exercises} />;
};

export default ExercisesPage;
