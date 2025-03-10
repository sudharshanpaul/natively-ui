import React from "react";
import { Text, Pressable, ActivityIndicator, View } from "react-native";
import { Href, router } from "expo-router";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export const Button = ({
  children,
  variant = "default",
  size = "default",
  disabled = false,
  isLoading = false,
  onPress,
  href,
  leftIcon,
  rightIcon,
  className = "",
  textClassName = "",
}: ButtonProps) => {
  // Base button styles
  const baseButtonStyles = "items-center justify-center rounded-lg";

  // Variant styles
  const variantStyles = {
    default: "bg-[#2973B2]",
    destructive: "bg-[#D84040]",
    outline: "border border-[#e2e8f0] bg-[#ffffff]",
    secondary: "bg-[#e3dede]",
    ghost: "bg-transparent",
    link: "bg-transparent",
  };

  // Size styles
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 rounded-lg",
    lg: "h-12 px-8 rounded-lg",
    icon: "h-10 w-10",
  };

  // Text styles
  const baseTextStyles = "font-medium";
  const textVariantStyles = {
    default: "text-white",
    destructive: "text-white",
    outline: "text-[#111111]",
    secondary: "text-[#111111]",
    ghost: "text-[#111111]",
    link: "text-blue underline",
  };
  const textSizeStyles = {
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
    icon: "text-base",
  };

  // Combine all button styles
  const buttonStyles = cn(
    baseButtonStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50",
    className
  );

  const textStyles = cn(
    baseTextStyles,
    textVariantStyles[variant],
    textSizeStyles[size],
    textClassName
  );

  const handlePress = () => {
    if (disabled || isLoading) return;

    if (href) {
      router.push(href as Href);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      className={buttonStyles}
      disabled={disabled || isLoading}
    >
      <View className="flex-row items-center gap-2 justify-center">
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={
              variant === "outline" || variant === "ghost" || variant === "link"
                ? "#000"
                : "#fff"
            }
          />
        ) : leftIcon ? (
          <View>{leftIcon}</View>
        ) : null}

        {children && <Text className={textStyles}>{children}</Text>}

        {rightIcon && !isLoading && <View>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

export default Button;
