import TypeWriterText from "@/components/TypeWriterText";
import SignUpForm from "@/components/forms/auth/SignUpForm";

const Home = () => (
  <main className="flex flex-col">
    <div className="border-2 border-pink-400 rounded p-10">
      <div className="bg-gray-900 h-96 w-"> </div>
      <p className="font-semibold text-3xl">
        I want to be{" "}
        <TypeWriterText
          words={["fitter", "stronger", "healthier", "happier", "better"]}
        />
      </p>
    </div>
  </main>
);

export default Home;
