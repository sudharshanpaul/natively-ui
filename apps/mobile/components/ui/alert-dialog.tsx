import React, { createContext, useContext, useState } from "react";
import { Text, Pressable, View, Modal, PressableProps } from "react-native";
import { cn } from "@/lib/utils";

// Create context for the alert dialog
const AlertDialogContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

// Root component that provides context
export const AlertDialog = ({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// Trigger component with proper type definitions
export const AlertDialogTrigger = ({
  children,
  className = "",
  asChild = false,
  onPress,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  onPress?: () => void;
} & Omit<PressableProps, "onPress">) => {
  const { setOpen } = useContext(AlertDialogContext);

  const handlePress = () => {
    setOpen(true);
    if (onPress) onPress();
  };

  // If asChild is true, we clone the child and add the onPress handler
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      onPress: () => {
        setOpen(true);
        if (children.props.onPress) children.props.onPress();
      },
    });
  }

  return (
    <Pressable className={cn("", className)} onPress={handlePress} {...props}>
      {children}
    </Pressable>
  );
};

// Content component (modal) - handles backdrop press correctly
export const AlertDialogContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { open, setOpen } = useContext(AlertDialogContext);

  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="fade"
      onRequestClose={() => setOpen(false)}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <Pressable
          className={cn(
            "bg-white rounded-lg w-4/5 max-w-md p-4 shadow-lg",
            className
          )}
        >
          {children}
        </Pressable>
      </View>
    </Modal>
  );
};

// Header component
export const AlertDialogHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <View className={cn("space-y-2 mb-4", className)}>{children}</View>;
};

// Footer component
export const AlertDialogFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <View
      className={cn(
        "flex-row justify-end items-center gap-2 mt-4",
        className
      )}
    >
      {children}
    </View>
  );
};

// Title component
export const AlertDialogTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Text className={cn("text-lg font-semibold text-[#111111]", className)}>
      {children}
    </Text>
  );
};

// Description component
export const AlertDialogDescription = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Text className={cn("text-sm text-gray-500", className)}>{children}</Text>
  );
};

// Cancel button with proper type definitions
export const AlertDialogCancel = ({
  children,
  className = "",
  onPress,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
} & Omit<PressableProps, "onPress">) => {
  const { setOpen } = useContext(AlertDialogContext);

  const handlePress = () => {
    setOpen(false);
    if (onPress) onPress();
  };

  return (
    <Pressable
      className={cn(
        "h-10 px-4 py-2 rounded-lg bg-[#e3dede] items-center justify-center",
        className
      )}
      onPress={handlePress}
      {...props}
    >
      <Text className="font-medium text-[#111111]">{children}</Text>
    </Pressable>
  );
};

// Action button with proper type definitions
export const AlertDialogAction = ({
  children,
  className = "",
  variant = "default",
  onPress,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive";
  onPress?: () => void;
} & Omit<PressableProps, "onPress">) => {
  const { setOpen } = useContext(AlertDialogContext);

  const variantStyles = {
    default: "bg-[#2973B2]",
    destructive: "bg-[#D84040]",
  };

  const handlePress = () => {
    setOpen(false);
    if (onPress) onPress();
  };

  return (
    <Pressable
      className={cn(
        "h-10 px-4 py-2 rounded-lg items-center justify-center",
        variantStyles[variant],
        className
      )}
      onPress={handlePress}
      {...props}
    >
      <Text className="font-medium text-white">{children}</Text>
    </Pressable>
  );
};

export default AlertDialog;
