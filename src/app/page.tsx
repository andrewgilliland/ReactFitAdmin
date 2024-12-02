"use client";
import SliderForm from "@/components/SliderForm";
import TypeWriterText from "@/components/TypeWriterText";

const Home = () => (
  <main className="flex flex-col">
    <div className="rounded border-2 border-pink-400 p-10">
      <SliderForm />
      <p className="mt-4 text-3xl font-semibold">
        I want to be{" "}
        <TypeWriterText
          words={["fitter", "stronger", "healthier", "happier", "better"]}
        />
      </p>
    </div>
  </main>
);

export default Home;
