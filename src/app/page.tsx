import TypeWriterText from "@/components/TypeWriterText";
import SignupForm from "@/components/forms/auth/SignupForm";

const Home = () => (
  <main className="flex flex-col">
    <div className="border-2 border-pink-400 rounded p-10">
      <p className="font-semibold text-3xl">
        I want to be{" "}
        <TypeWriterText
          words={["fitter", "stronger", "healthier", "happier", "better"]}
        />
      </p>
    </div>
    <section className="flex flex-row justify-center mt-12 gap-10">
      {/* <LoginForm /> */}
      <SignupForm />
    </section>
  </main>
);

export default Home;
