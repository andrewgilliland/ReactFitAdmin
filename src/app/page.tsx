"use client";
import Button from "@/components/Button";
import Image from "next/image";

const Home = () => (
  <main className="flex flex-col">
    <section>
      <div className="mx-4">
        <div>
          <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-neutral-100 md:mt-10 md:text-7xl">
            Track your workouts and progress
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-neutral-400 md:text-xl/8">
            ReactFit is a fitness app designed to help you track your workouts
            and monitor your progress. Developed to personalize your workout
            program, track progress, and keep you motivated.
          </p>
        </div>

        <div className="mt-10 flex gap-6">
          <Button className="max-w-fit">Get started</Button>
          <Button className="max-w-fit" theme="secondary">
            Learn more
          </Button>
        </div>
      </div>

      <div className="mt-20">
        <Image
          src="/gym-back-1.jpg"
          width={1920}
          height={1080}
          alt="A blonde woman working out at the gym"
          className="brightness-75 filter"
        />
      </div>
    </section>
  </main>
);

export default Home;
