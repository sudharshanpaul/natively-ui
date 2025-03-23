import React from "react";
import { Text, View } from "react-native";
import { cn } from "@/lib/utils";

export interface BadgeProps {
  children?: React.ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "success"
    | "warning";
  size?: "default" | "sm" | "lg";
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export const Badge = ({
  children,
  variant = "default",
  size = "default",
  icon,
  className = "",
  textClassName = "",
}: BadgeProps) => {
  // Base badge styles
  const baseBadgeStyles =
    "flex-row items-center justify-center rounded-md self-start";

  // Variant styles
  const variantStyles = {
    default: "bg-[#2973B2]",
    secondary: "bg-[#e3dede]",
    destructive: "bg-[#D84040]",
    outline: "bg-transparent border border-[#e2e8f0]",
    success: "bg-[#10B981]",
    warning: "bg-[#F59E0B]",
  };

  // Size styles
  const sizeStyles = {
    default: "px-2 py-1",
    sm: "px-2 py-1",
    lg: "px-3 py-2",
  };

  // Text styles
  const baseTextStyles = "font-medium";
  const textVariantStyles = {
    default: "text-white",
    secondary: "text-[#111111]",
    destructive: "text-white",
    outline: "text-[#111111]",
    success: "text-white",
    warning: "text-white",
  };
  const textSizeStyles = {
    default: "text-xs",
    sm: "text-xs",
    lg: "text-sm",
  };

  // Combine all badge styles
  const badgeStyles = cn(
    baseBadgeStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const textStyles = cn(
    baseTextStyles,
    textVariantStyles[variant],
    textSizeStyles[size],
    textClassName
  );

  return (
    <View className={badgeStyles}>
      {icon && <View className="mr-1">{icon}</View>}
      {children && <Text className={textStyles}>{children}</Text>}
    </View>
  );
};

export default Badge;
