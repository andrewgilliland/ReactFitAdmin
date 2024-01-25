"use client";

import { usePathname } from "next/navigation";

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  // Fetch exercise data based on the slug here

  return (
    // Render your page component here
    <div>
      <p>{params.slug}</p>
    </div>
  );
}
