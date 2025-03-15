import React from "react";
import { View, Image, Text } from "react-native";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  fallback?: string;
  size?: "sm" | "default" | "lg" | "xl";
  variant?: "circle" | "rounded" | "square";
  className?: string;
  fallbackClassName?: string;
}

const Avatar = ({
  src,
  alt = "",
  fallback,
  size = "default",
  variant = "circle",
  className = "",
  fallbackClassName = "",
}: AvatarProps) => {
  const [hasError, setHasError] = React.useState(false);

  // Size styles
  const sizeStyles = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  // Variant styles
  const variantStyles = {
    circle: "rounded-full",
    rounded: "rounded-lg",
    square: "rounded-none",
  };

  // Base styles
  const baseStyles = "overflow-hidden bg-gray-200";

  // Combined styles
  const containerStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  // Fallback text sizes
  const fallbackTextSizes = {
    sm: "text-xs",
    default: "text-sm",
    lg: "text-base",
    xl: "text-lg",
  };

  // Fallback container styles
  const fallbackContainerStyles = cn(
    "items-center justify-center bg-gray-300",
    sizeStyles[size],
    variantStyles[variant]
  );

  // Fallback text styles
  const fallbackTextStyles = cn(
    "font-medium text-gray-600",
    fallbackTextSizes[size],
    fallbackClassName
  );

  // Get initials from alt text or fallback
  const getInitials = () => {
    if (fallback) return fallback.substring(0, 2);

    if (alt) {
      const words = alt.split(" ");
      if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
      } else if (words.length > 1) {
        return (words[0][0] + words[1][0]).toUpperCase();
      }
    }

    return "?";
  };

  // Render avatar or fallback
  if (!src || hasError) {
    return (
      <View className={fallbackContainerStyles}>
        <Text className={fallbackTextStyles}>{getInitials()}</Text>
      </View>
    );
  }

  return (
    <Image
      source={{ uri: src }}
      className={containerStyles}
      alt={alt}
      onError={() => setHasError(true)}
    />
  );
};

export default Avatar;
