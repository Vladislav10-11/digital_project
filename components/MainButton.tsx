import { type } from "os";
import React, { FC, ReactNode } from "react";
interface IMainButton {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  children: ReactNode;
}
const MainButton: FC<IMainButton> = ({ children, className, type }) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center bg-bgColor py-6 px-12 gap-6 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default MainButton;
