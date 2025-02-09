import { getUser } from "@/lib/actions";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

const ProfilePage = async () => {
  const user = await getUser();

  console.log("user: ", user);
  const image = false;

  return (
    <div className="flex flex-col">
      <section className="mx-auto my-12 grid max-w-3xl gap-6 rounded-2xl bg-neutral-800 p-6 sm:grid-cols-2 sm:grid-rows-2">
        <div className="row-span-2 overflow-hidden rounded-xl bg-neutral-900 p-4 shadow-xl">
          <div className="aspect-square rounded-xl bg-neutral-950 p-4">
            {image ? (
              <Image
                src="/gym-back-1.jpg"
                width={10880}
                height={1080}
                alt="A blonde woman working out at the gym"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <UserCircleIcon className="h-full w-full stroke-1 text-neutral-100" />
            )}
          </div>
          <div className="grid gap-4 p-4 text-sm text-neutral-100">
            <div className="">Email: {user?.email}</div>
            <div>First Name: Eddie</div>
            <div>Last Name: Van Halen</div>
            <Button>Edit</Button>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-neutral-900 shadow-xl">
          <div className="mx-4 border-b border-neutral-100 p-4">
            <h3>Completed Workouts</h3>
          </div>
          <div className="grid gap-2 p-4">
            <div className="rounded-xl bg-neutral-800 p-2">Workout 1</div>
            <div className="rounded-xl bg-neutral-800 p-2">Workout 2</div>
            <div className="rounded-xl bg-neutral-800 p-2">Workout 3</div>
          </div>
        </div>
        <div className="row-span-1 rounded-xl bg-neutral-900 shadow-xl">
          <div className="mx-4 border-b border-neutral-100 p-4">
            <h3>Completed Workouts</h3>
          </div>
          <div className="grid gap-2 p-4">
            <div className="rounded-xl bg-neutral-800 p-2">Workout 1</div>
            <div className="rounded-xl bg-neutral-800 p-2">Workout 2</div>
            {/* <div className="rounded-xl bg-neutral-800 p-2">Workout 3</div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
