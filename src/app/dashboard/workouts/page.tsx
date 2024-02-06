import SearchInput from "@/components/forms/SearchInput";

const WorkoutsPage = () => {
  const workouts = Array.from({ length: 10 });

  return (
    <section className="min-h-screen">
      <div className="flex justify-between">
        <SearchInput className="mb-10" name="workouts" />
        <div className="text-gray-400 font-semibold">{10} Workouts</div>
      </div>
      <div className="flex flex-wrap w-full max-w-6xl gap-6 mt-4">
        {workouts.map((_, index) => (
          <div key={index}>Sweet</div>
        ))}
      </div>
    </section>
  );
};

export default WorkoutsPage;
