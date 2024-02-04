"use client";

import Link from "next/link";
import Input from "./Input";
import Button from "./Button";

const LoginForm = () => {
  return (
    <form
      className="flex flex-col border-2 border-pink-400 rounded p-6"
      action=""
    >
      <Input name="username" value="Biff" />
      <Input name="password" value="password" />
      <Link className="mt-3" href="/dashboard">
        <Button>Login</Button>
      </Link>
    </form>
  );
};

export default LoginForm;
