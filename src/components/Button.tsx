import { FC, FormEvent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (event?: FormEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  theme?: "primary" | "secondary";
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
  size = "md",
  theme = "primary",
}) => {
  const themes = {
    primary: "bg-orange-600 text-white border-orange-600 hover:bg-black",
    secondary: "bg-blue-700 text-white border-blue-700 hover:bg-black",
  };

  const sizes = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-semibold border-2 rounded-xl w-full transition duration-500 cursor-grab active:cursor-grabbing ${className} ${sizes[size]} ${themes[theme]}`}
    >
      {children}
    </button>
  );
};

export default Button;
