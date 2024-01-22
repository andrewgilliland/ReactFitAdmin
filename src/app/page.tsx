import Button from "@/components/Button";
import Input from "@/components/Input";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

const Home = () => (
  <main className="flex flex-col">
    <div className="flex flex-row justify-center">
      <LoginForm />
    </div>
  </main>
);

export default Home;
