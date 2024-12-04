import Card from "@/components/Card";
import SearchInput from "@/components/forms/SearchInput";
import { getWorkouts } from "@/lib/actions";

const WorkoutsPage = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="min-h-screen">
      <div className="flex justify-between">
        <SearchInput className="mb-10" name="workouts" />
        <div className="font-semibold text-gray-400">
          {workouts.length} Workouts
        </div>
      </div>
      <div className="mt-4 flex w-full max-w-6xl flex-wrap gap-6">
        {workouts.map((workout) => (
          <Card workout={workout} key={workout.id} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutsPage;
