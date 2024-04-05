"use client";
import { useFormState } from "react-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn, signup } from "@/lib/actions";
import { FormState } from "@/types";
import Link from "next/link";

const SignInForm = () => {
  //   const initialFormState = {
  //     success: false,
  //     message: "",
  //     errors: undefined,
  //   } as FormState;
  //   const [formState, formAction] = useFormState(signIn, initialFormState);

  return (
    <form
      className="border-2 border-pink-400 rounded px-6 pt-8 pb-28 mx-auto max-w-sm"
      action={signIn}
    >
      <div className="">
        <h1 className="font-bold text-xl">Sign In</h1>
        <p className="text-gray-400 text-sm">
          Enter your email below to sign in to your account
        </p>
      </div>
      <div className="mt-12">
        <Input name="email" type="email" />
        <Input className="mt-4" name="password" type="password" />
        <Link
          href="forgot-password"
          className="text-gray-400 text-sm underline mt-2"
        >
          Forgot your password
        </Link>
        <Button className="mt-6" type="submit">
          Sign In
        </Button>

        <div className="flex justify-center text-gray-400 text-sm mt-4">
          {`Don't have an account? `}
          <span className="ml-2">
            <Link href="signup" className="underline">
              Sign up
            </Link>
          </span>
        </div>
      </div>

      {/* <div className="h-32"></div> */}

      {/* {formState.success && (
        <div className="flex justify-center text-emerald-400 border-2 border-emerald-400 rounded mt-4 p-2">
          <div className="capitalize">{formState.message}</div>
        </div>
      )}
      {!formState.success && formState.errors && (
        <div className="flex justify-center text-red-400 border-2 border-red-400 rounded mt-4 p-2">
          <div className="capitalize">{formState.message}</div>
        </div>
      )} */}
    </form>
  );
};

export default SignInForm;
