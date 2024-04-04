"use client";
import { useFormState } from "react-dom";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { signIn, signup } from "@/lib/actions";
import { FormState } from "@/types";

const SignInForm = () => {
  //   const initialFormState = {
  //     success: false,
  //     message: "",
  //     errors: undefined,
  //   } as FormState;
  //   const [formState, formAction] = useFormState(signIn, initialFormState);

  return (
    <form
      className="bg-black flex flex-col border-2 border-pink-400 rounded p-4 w-64"
      action={signIn}
    >
      <Input name="email" type="email" />
      <Input className="mt-4" name="password" type="password" />
      <Button className="mt-10" type="submit">
        Sign In
      </Button>

      <div className="h-32"></div>

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
