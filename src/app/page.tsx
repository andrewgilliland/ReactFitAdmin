import LoginForm from "@/components/LoginForm";
import TypeWriterText from "@/components/TypeWriterText";

const Home = () => (
  <main className="flex flex-col">
    <div className="border p-10">
      <p className="font-semibold text-3xl">
        I want to be{" "}
        <TypeWriterText
          words={["fitter", "stronger", "healthier", "happier", "better"]}
        />
      </p>
    </div>
    <section className="flex flex-row justify-center mt-12">
      <LoginForm />
    </section>
  </main>
);

export default Home;
