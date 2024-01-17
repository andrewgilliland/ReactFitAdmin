import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="font-semibold text-pink-400 border-2 border-pink-400 px-4 py-2 rounded-md transition hover:bg-pink-400 hover:text-black">
      {children}
    </button>
  );
};

export default Button;
