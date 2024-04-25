"use client";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`flex justify-center items-center border-2 rounded h-11 mt-8 transition ${
        pending
          ? "text-gray-600 border-gray-600 hover:bg-gray-600"
          : "text-pink-400 border-pink-400 hover:bg-pink-400"
      }  hover:text-black`}
      disabled={pending}
    >
      {pending ? (
        <ArrowPathIcon className="h-5 w-5 animate-spin" />
      ) : (
        <span className="font-semibold">Create</span>
      )}
    </button>
  );
};

export default SubmitButton;
