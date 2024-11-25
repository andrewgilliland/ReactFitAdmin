import BarChart from "@/components/BarChart";
import LogoutButton from "@/components/LogoutButton";
import { getAuthJWT, getExercises, getUser } from "@/lib/actions";

const Dashboard = async () => {
  const user = await getUser();
  const exercises = await getExercises();
  // return an array of objects with the muscle group and the amount of exercises of that type of muscle group

  await getAuthJWT();

  return (
    <main className="flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-xl">Dashboard</h1>
      </div>
      <section className="flex justify-between items-center border-2 border-cyan-400 rounded-md mt-4 p-10">
        <div className="text-sm">{`Email: ${user?.email}`}</div>
        <LogoutButton />
      </section>
      <section className="flex flex-col mt-4"></section>
    </main>
  );
};

export default Dashboard;
