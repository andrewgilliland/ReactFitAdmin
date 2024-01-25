import { PencilIcon } from "@heroicons/react/24/solid";

const EditButton = ({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center absolute border-2 border-pink-400 rounded-full h-6 w-6 bottom-1 right-2 group transition hover:bg-pink-400 ${className}`}
    >
      <PencilIcon className="text-pink-400 h-3 w-3 transition group-hover:text-black" />
    </button>
  );
};

export default EditButton;
