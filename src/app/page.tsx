"use client";
import Button from "@/components/Button";
import Image from "next/image";

const HomePage = () => (
  <main className="flex flex-col">
    <section className="flex flex-col justify-between md:h-screen md:flex-row">
      <div className="mx-4 md:my-20 md:max-w-md lg:mx-auto">
        <div className="mt-24 md:mt-0">
          <h1 className="text-pretty text-5xl font-semibold tracking-tight text-neutral-100 md:mt-10 lg:text-7xl">
            Track your workouts and progress
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-neutral-400 lg:text-xl/8">
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

      <div className="relative mt-20 md:mt-0 md:w-1/2">
        <Image
          src="/gym-back-1.jpg"
          width={1920}
          height={1080}
          alt="A blonde woman working out at the gym"
          className="h-full object-cover brightness-50 filter"
        />
        <div className="absolute top-0 h-full w-full bg-gradient-to-b from-black md:bg-gradient-to-r" />
      </div>
    </section>
  </main>
);

export default HomePage;
