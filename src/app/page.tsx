"use client";
import SliderForm from "@/components/SliderForm";
import TypeWriterText from "@/components/TypeWriterText";
import SignUpForm from "@/components/forms/auth/SignUpForm";

const Home = () => (
  <main className="flex flex-col">
    <div className="border-2 border-pink-400 rounded p-10">
      <SliderForm />
      {/* <p className="font-semibold text-3xl mt-4">
        I want to be{" "}
        <TypeWriterText
          words={["fitter", "stronger", "healthier", "happier", "better"]}
        />
      </p> */}
    </div>
  </main>
);

export default Home;
