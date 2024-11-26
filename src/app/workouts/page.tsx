import WorkoutCard from "@/components/cards/WorkoutCard";

const WorkoutsPage = async () => {
  const workouts = [
    {
      name: "Beginner Strength",
      difficulty: "beginner",
      type: "Strength",
      rating: 4.3,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: 10,
        },
        {
          name: "Squat",
          sets: 3,
          reps: 10,
        },
        {
          name: "Deadlift",
          sets: 3,
          reps: 10,
        },
      ],
    },
    {
      name: "Moderate Strength",
      difficulty: "intermediate",
      type: "Strength",
      rating: 4.3,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: 10,
        },
        {
          name: "Squat",
          sets: 3,
          reps: 10,
        },
        {
          name: "Deadlift",
          sets: 3,
          reps: 10,
        },
      ],
    },
    {
      name: "Leg Strength Training",
      difficulty: "advanced",
      type: "Strength",
      rating: 4.3,
      exercises: [
        {
          name: "Bench Press",
          sets: 3,
          reps: 10,
        },
        {
          name: "Squat",
          sets: 3,
          reps: 10,
        },
        {
          name: "Deadlift",
          sets: 3,
          reps: 10,
        },
        {
          name: "Pull Ups",
          sets: 3,
          reps: 10,
        },
      ],
    },
  ];

  return (
    <main className="mx-auto">
      <div className="md:w-1/2 lg:w-2/5 mx-auto">
        <h1 className="font-semibold text-xl md:text-3xl">Workouts</h1>

        <section className="bg-neutral-800 rounded-xl mt-6 p-4">
          <div className="grid gap-4">
            {workouts.map((workout, index) => (
              <WorkoutCard workout={workout} key={index} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkoutsPage;
