import { FC, FormEvent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (event?: FormEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
  size = "md",
}) => {
  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-pink-400 border-2 border-pink-400 rounded-md transition hover:bg-pink-400 hover:text-black ${className} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
