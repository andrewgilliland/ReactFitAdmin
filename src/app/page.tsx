import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

const Home = () => (
  <main className="flex flex-col">
    <div className="flex flex-row justify-center">
      <form
        className="flex flex-col border-2 border-pink-400 rounded p-6"
        action=""
      >
        <Input name="username" />
        <label htmlFor="">Password</label>
        <input type="text" name="" id="" />
        <Link href="/dashboard">
          <Button>Login</Button>
        </Link>
      </form>
    </div>
  </main>
);

export default Home;
