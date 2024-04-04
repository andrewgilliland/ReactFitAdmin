import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const isLoggedIn = true;

  return (
    <div className="flex justify-between items-center px-[10%] py-4 border-b-2 border-cyan-400">
      <Link href="/">
        <h1 className="text-2xl font-bold">ReactFit</h1>
      </Link>
      {isLoggedIn ? (
        <div className="flex gap-4">
          <Link href="/sign-in">
            <Button size="sm">Sign In</Button>
          </Link>
        </div>
      ) : (
        <div className="flex justify-center items-center bg-cyan-400 h-7 w-7 rounded-full">
          <div className="flex justify-center items-center bg-yellow-400 h-6 w-6 rounded-full border-4 border-black">
            <div className="bg-pink-400 h-3 w-3 rounded-full border-4 border-black" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
