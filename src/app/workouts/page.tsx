import WorkoutCard from "@/components/cards/WorkoutCard";
import SearchInput from "@/components/forms/SearchInput";
import { getWorkouts } from "@/lib/actions";

const WorkoutsPage = async () => {
  const workouts = await getWorkouts();

  const workoutsTwo = [
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
    <div className="min-h-screen">
      <div className="flex justify-between">
        <SearchInput className="mb-10" name="workouts" />
        <div className="font-semibold text-gray-400">
          {workouts.length} Workouts
        </div>
      </div>
      <section className="mt-6 rounded-xl bg-neutral-800 p-4">
        <div className="grid gap-4">
          {workoutsTwo.map((workout, index) => (
            <WorkoutCard workout={workout} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkoutsPage;
