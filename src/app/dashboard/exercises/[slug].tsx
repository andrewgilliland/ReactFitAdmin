import { usePathname } from "next/navigation";

export default function ExercisePage({ params }: { params: { slug: string } }) {
  const pathname = usePathname();
  // Fetch exercise data based on the slug here

  return (
    // Render your page component here
    <div>
      <h1 className="text-blue-500">Exercise Page</h1>
      <p>{params.slug}</p>
    </div>
  );
}
