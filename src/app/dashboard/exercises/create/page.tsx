import Link from "next/link";

const CreateExercise = () => (
  <main className="flex min-h-screen flex-col p-32 bg-black text-white">
    <div className="flex flex-row justify-between">
      <h1 className="font-semibold text-xl">Create Exercise</h1>
      <Link
        className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
        href="/dashboard/exercises"
      >
        Go Back
      </Link>
    </div>
  </main>
);

export default CreateExercise;
