import { FC, FormEvent, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (event?: FormEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  theme?: "primary" | "secondary" | "neutral";
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
    primary: "bg-orange-600 border-orange-600 hover:bg-transparent",
    secondary: "bg-blue-700 border-blue-700 hover:bg-transparent",
    neutral: `bg-neutral-900 border-neutral-900 hover:border-neutral-700 hover:bg-neutral-700`,
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
      className={`w-full rounded-xl border-2 font-semibold text-neutral-100 transition duration-500 ${className} ${sizes[size]} ${themes[theme]}`}
    >
      {children}
    </button>
  );
};

export default Button;
