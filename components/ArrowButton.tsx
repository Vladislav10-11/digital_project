import { FC, ReactNode } from "react";

interface IArrowButton {
  className?: string;
  children: ReactNode;
}
const ArrowButton: FC<IArrowButton> = ({ children, className }) => {
  return (
    <div
      className={`p-4 border-secondaryColor border-2 flex justify-center items-center cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default ArrowButton;
