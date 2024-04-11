import BarChart from "@/components/BarChart";
import { getExercises } from "@/lib/actions";

const Dashboard = async () => {
  const exercises = await getExercises();

  // return an array of objects with the muscle group and the amount of exercises of that type of muscle group
  const data = exercises.map((exercise) => {
    return {
      muscleGroup: exercise?.targetMuscleGroup,
      amount: 1,
    };
  });

  return (
    <main className="flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-xl">Dashboard</h1>
      </div>
      <section className="flex flex-col mt-4">
        <div className="border-2 border-pink-400 rounded">
          <h2 className="font-semibold text-xl">Exercises</h2>
          <BarChart data={data} />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
