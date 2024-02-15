import Card from "@/components/Card";
import SearchInput from "@/components/forms/SearchInput";
import { getWorkouts } from "@/lib/actions";

const WorkoutsPage = async () => {
  const workouts = await getWorkouts();

  return (
    <section className="min-h-screen">
      <div className="flex justify-between">
        <SearchInput className="mb-10" name="workouts" />
        <div className="text-gray-400 font-semibold">
          {workouts.length} Workouts
        </div>
      </div>
      <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
        {workouts.map((workout) => (
          <Card workout={workout} key={workout.id} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutsPage;
