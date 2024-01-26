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
      className={`flex justify-center items-center border-2 border-pink-400 rounded transition px-1 hover:bg-pink-400 group ${className}`}
    >
      <p className="text-sm text-pink-400 transition group-hover:text-black">
        Edit
      </p>
    </button>
  );
};

export default EditButton;
