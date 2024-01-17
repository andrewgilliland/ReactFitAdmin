import Link from "next/link";

const Programs = () => {
  return (
    <main className="flex flex-col">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-xl">Programs</h1>
        <Link
          className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
          href="/dashboard"
        >
          Create Program
        </Link>
      </div>
    </main>
  );
};

export default Programs;
