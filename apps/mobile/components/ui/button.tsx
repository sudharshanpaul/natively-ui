import { cn } from "@/lib/utils";
import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onPress?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({
  variant = "default",
  size = "default",
  onPress,
  children,
  className,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded-md",
        // Variants
        variant === "default" && "bg-blue-500",
        variant === "destructive" && "bg-destructive",
        variant === "outline" && "border border-input bg-transparent",
        variant === "secondary" && "bg-secondary",
        variant === "ghost" && "bg-transparent",
        variant === "link" && "bg-transparent underline-offset-4",
        // Sizes
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-8 px-3",
        size === "lg" && "h-12 px-6",
        size === "icon" && "h-10 w-10",
        // Disabled
        disabled && "opacity-50",
        className
      )}
      {...props}
    >
      <Text
        className={cn(
          "text-sm font-medium",
          variant === "default" && "text-white",
          variant === "destructive" && "text-destructive-foreground",
          variant === "outline" && "text-foreground",
          variant === "secondary" && "text-secondary-foreground",
          variant === "ghost" && "text-foreground",
          variant === "link" && "text-primary underline"
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
}
