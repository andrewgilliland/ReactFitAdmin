import {
  StarIcon,
  ForwardIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const WorkoutsPage = async () => {
  const workouts = [
    {
      name: "Workout 1",
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
      name: "Workout 2",
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
      name: "Workout 3",
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
  ];

  return (
    <main className="flex flex-col">
      <h1 className="font-semibold text-xl max-w-sm mt-6">Workouts</h1>

      <section className=" bg-gray-800 rounded-xl mt-6 p-4">
        <div className="grid gap-4">
          {workouts.map((workout, index) => (
            <div
              className="group flex justify-between items-center bg-gray-900 p-4 rounded-xl hover:scale-[.98] transition-transform"
              key={index}
            >
              <div>
                <h3 className="font-bold text-base text-gray-200">
                  {workout.name}
                </h3>
                <div className="flex gap-4 mt-1">
                  <div className="flex justify-center items-center">
                    <StarIcon className="h-4 w-4 text-orange-600 stroke-2" />
                    <span className="text-sm text-gray-200 ml-1">
                      {workout.rating}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ForwardIcon className="h-4 w-4 text-blue-600 stroke-2" />
                    <span className="text-sm text-gray-200 ml-1">
                      {workout.exercises.length} Exercises
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRightIcon className="h-5 w-5 text-gray-200 stroke-2 group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default WorkoutsPage;
