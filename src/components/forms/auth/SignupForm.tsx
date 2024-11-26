"use client";
import { useFormState } from "react-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn, signup } from "@/lib/actions";
import { FormState } from "@/types";
import Link from "next/link";

const SignUpForm = () => {
  return (
    <form
      className="border-2 border-neutral-800 rounded-xl px-6 pt-8 pb-28 mx-auto max-w-sm"
      action={signIn}
    >
      <div className="">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <p className="text-gray-400 text-sm">
          Get Started with your own personalized workout plan today.
        </p>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input name="first name" type="text" />
          <Input name="last name" type="text" />
        </div>
        <Input className="mt-4" name="email" type="email" />
        <Input className="mt-4" name="password" type="password" />
        <Input className="mt-4" name="confirm password" type="password" />

        <Button className="mt-6" type="submit" theme="secondary">
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
