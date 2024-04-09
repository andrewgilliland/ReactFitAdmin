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
    primary: "bg-pink-400 text-black hover:bg-black hover:text-pink-400",
    secondary: "bg-black text-pink-400 hover:bg-pink-400 hover:text-black",
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
      className={`font-semibold border-2 border-pink-400 rounded-md w-full transition duration-500 ${className} ${sizes[size]} ${themes[theme]}`}
    >
      {children}
    </button>
  );
};

export default Button;
