"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  // Fetch exercise data based on the slug here

  return (
    // Render your page component here
    <div className="">
      <div className="flex justify-between items-center">
        <p>{params.slug}</p>
        <Link
          className="text-pink-500 border border-pink-500 px-4 py-2 rounded-md transition hover:bg-pink-500 hover:text-black"
          href="/dashboard/exercises"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
