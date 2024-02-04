import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="flex justify-center items-center text-pink-400 border-2 border-pink-400 rounded h-11 mt-8 transition hover:bg-pink-400 hover:text-black"
      disabled={pending}
    >
      {pending ? <ArrowPathIcon className="h-5 w-5 animate-spin" /> : "Create"}
    </button>
  );
};

export default SubmitButton;
