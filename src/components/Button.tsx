import { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({ children, className, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-pink-400 border-2 border-pink-400 px-4 py-2 rounded-md transition hover:bg-pink-400 hover:text-black ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
