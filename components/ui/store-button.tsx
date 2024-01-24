import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface StoreButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StoreButton = forwardRef<HTMLButtonElement, StoreButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `
          w-auto 
          rounded-full
          bg-pink-500
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

StoreButton.displayName = "StoreButton";

export default StoreButton;
