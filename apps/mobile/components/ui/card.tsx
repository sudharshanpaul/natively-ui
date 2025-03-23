import React from "react";
import {
  View,
  Text,
  Pressable,
  ViewProps,
  TextProps,
  PressableProps,
} from "react-native";
import { cn } from "@/lib/utils";

// Card root component
const Card = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        "bg-white rounded-lg border border-[#e2e8f0] overflow-hidden",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Card header
const CardHeader = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("p-4 space-y-1.5", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

// Card title
const CardTitle = React.forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

// Card description
const CardDescription = React.forwardRef<Text, TextProps>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn("text-sm text-[#64748b]", className)}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

// Card content
const CardContent = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("p-4 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

// Card footer
const CardFooter = React.forwardRef<View, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex flex-row items-center p-4 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";

// Interactive card
const PressableCard = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  PressableProps
>(({ className, ...props }, ref) => (
  <Pressable
    ref={ref}
    className={cn(
      "bg-white rounded-lg border border-[#e2e8f0] overflow-hidden",
      className
    )}
    {...props}
  />
));
PressableCard.displayName = "PressableCard";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  PressableCard,
};
