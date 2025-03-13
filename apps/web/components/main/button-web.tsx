import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textClassName?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "default",
      disabled = false,
      isLoading = false,
      className = "",
      textClassName = "",
      href,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    // Base button styles
    const baseButtonStyles =
      "inline-flex items-center justify-center rounded-lg";

    // Variant styles
    const variantStyles = {
      default: "bg-[#2973B2] hover:bg-[#1f5c8c]",
      destructive: "bg-[#D84040] hover:bg-[#b53535]",
      outline: "border border-[#e2e8f0] bg-[#ffffff] hover:bg-[#f8f9fa]",
      secondary: "bg-[#e3dede] hover:bg-[#d0d0d0]",
      ghost: "bg-transparent hover:bg-gray-100",
      link: "bg-transparent underline-offset-4 hover:underline",
    };

    // Size styles
    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 rounded-lg text-sm",
      lg: "h-12 px-8 rounded-lg text-lg",
      icon: "h-10 w-10",
    };

    // Text styles
    const textVariantStyles = {
      default: "text-white",
      destructive: "text-white",
      outline: "text-[#111111]",
      secondary: "text-[#111111]",
      ghost: "text-[#111111]",
      link: "text-blue underline",
    };

    const buttonStyles = cn(
      baseButtonStyles,
      variantStyles[variant],
      sizeStyles[size],
      (disabled || isLoading) && "opacity-50 cursor-not-allowed",
      className
    );

    const textStyles = cn(
      "font-medium",
      textVariantStyles[variant],
      textClassName
    );

    const content = (
      <div className="flex flex-row items-center gap-2 justify-center">
        {isLoading ? (
          <svg
            className={`animate-spin h-4 w-4 ${variant === "outline" || variant === "ghost" || variant === "link" ? "text-black" : "text-white"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : leftIcon ? (
          <span>{leftIcon}</span>
        ) : null}

        {children && <span className={textStyles}>{children}</span>}

        {rightIcon && !isLoading && <span>{rightIcon}</span>}
      </div>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonStyles, disabled && "pointer-events-none")}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={buttonStyles}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
