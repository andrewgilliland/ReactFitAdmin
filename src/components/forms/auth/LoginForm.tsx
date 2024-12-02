"use client";
import { useFormState } from "react-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn, signup } from "@/lib/actions";
import { FormState } from "@/types";
import Link from "next/link";

const LoginForm = () => {
  //   const initialFormState = {
  //     success: false,
  //     message: "",
  //     errors: undefined,
  //   } as FormState;
  //   const [formState, formAction] = useFormState(signIn, initialFormState);

  return (
    <form
      className="mx-auto max-w-sm rounded-xl border-2 border-neutral-800 px-6 pb-28 pt-8"
      action={signIn}
    >
      <div className="">
        <h1 className="text-xl font-bold text-neutral-100">Login</h1>
        <p className="text-sm text-neutral-400">
          Enter your email below to sign in to your account
        </p>
      </div>
      <div className="mt-12">
        <Input name="email" type="email" />
        <Input className="mt-4" name="password" type="password" />
        <Link
          href="forgot-password"
          className="mt-2 text-sm text-neutral-400 underline"
        >
          Forgot your password
        </Link>
        <Button className="mt-6" type="submit">
          Login
        </Button>

        <div className="mt-4 flex justify-center text-sm text-neutral-400">
          {`Don't have an account? `}
          <span className="ml-2">
            <Link href="signup" className="text-neutral-200 underline">
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

export default LoginForm;
