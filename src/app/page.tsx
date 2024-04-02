import Button from "@/components/Button";
import Input from "@/components/Input";
import LoginForm from "@/components/LoginForm";
import TypeWriterText from "@/components/TypeWriterText";
import { signUp } from "@/lib/actions";

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
    <section className="flex flex-row justify-center mt-12">
      <form
        className="bg-black flex flex-col border-2 border-pink-400 rounded p-4"
        action={signUp}
      >
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <Button className="mt-4" type="submit">
          Sign Up
        </Button>
      </form>
    </section>
  </main>
);

export default Home;
