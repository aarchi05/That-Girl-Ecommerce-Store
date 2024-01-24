import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface NavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
          w-auto 
          rounded-full
          bg-pink-300
          border
          border-transparent
          px-4 
          py-2 
          disabled:cursor-not-allowed 
          disabled:opacity-50
          text-white
          font-semibold
          transition
          hover:bg-transparent
          hover:border-pink-500
          hover:text-pink-500
          hover:opacity-75
        `,
          disabled && 'opacity-75 cursor-not-allowed',
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NavButton.displayName = "NavButton";

export default NavButton;

