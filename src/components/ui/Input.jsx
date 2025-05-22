import { forwardRef } from "react";

export const Input = forwardRef(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`glass-input w-full px-4 py-3 rounded-xl text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-all duration-300 outline-none ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
