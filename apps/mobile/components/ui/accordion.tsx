import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  ViewProps,
  TextProps,
  PressableProps,
  Animated,
  Easing,
} from "react-native";
import { cn } from "@/lib/utils";
import { Ionicons } from "@expo/vector-icons";

// Types for Accordion components
type AccordionProps = ViewProps & {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  className?: string;
  children: React.ReactNode;
};

type AccordionItemProps = ViewProps & {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AccordionTriggerProps = PressableProps & {
  className?: string;
  children: React.ReactNode;
};

type AccordionContentProps = ViewProps & {
  className?: string;
  children: React.ReactNode;
};

// Accordion Context
type AccordionContextType = {
  type: "single" | "multiple";
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
};

const AccordionContext = React.createContext<AccordionContextType | undefined>(
  undefined
);

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion component"
    );
  }
  return context;
};

// Item Context
type AccordionItemContextType = {
  value: string;
  disabled?: boolean;
  open: boolean;
  toggleItem: () => void;
};

const AccordionItemContext = React.createContext<
  AccordionItemContextType | undefined
>(undefined);

const useAccordionItemContext = () => {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      "AccordionItem subcomponents must be used within an AccordionItem"
    );
  }
  return context;
};

// Root Accordion Component
const Accordion = ({
  type = "single",
  defaultValue,
  value,
  onValueChange,
  className,
  children,
  ...props
}: AccordionProps) => {
  const [internalValue, setInternalValue] = useState<string | string[]>(
    value || defaultValue || (type === "multiple" ? [] : "")
  );

  // Update internal value when controlled value changes
  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue: string | string[]) => {
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue = {
    type,
    value: value !== undefined ? value : internalValue,
    onValueChange: handleValueChange,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <View className={cn("", className)} {...props}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
};

// Accordion Item Component
const AccordionItem = ({
  value,
  disabled = false,
  className,
  children,
  ...props
}: AccordionItemProps) => {
  const { type, value: selectedValue, onValueChange } = useAccordionContext();

  const isOpen =
    type === "single"
      ? selectedValue === value
      : Array.isArray(selectedValue) && selectedValue.includes(value);

  const toggleItem = () => {
    if (disabled) return;

    if (type === "single") {
      onValueChange(isOpen ? "" : value);
    } else {
      onValueChange(
        isOpen
          ? (selectedValue as string[]).filter((v) => v !== value)
          : [...(selectedValue as string[]), value]
      );
    }
  };

  return (
    <AccordionItemContext.Provider
      value={{ value, disabled, open: isOpen, toggleItem }}
    >
      <View className={cn("border-b border-gray-200", className)} {...props}>
        {children}
      </View>
    </AccordionItemContext.Provider>
  );
};

// Accordion Trigger Component
const AccordionTrigger = ({
  className,
  children,
  ...props
}: AccordionTriggerProps) => {
  const { open, toggleItem, disabled } = useAccordionItemContext();

  return (
    <Pressable
      className={cn(
        "flex-row items-center justify-between p-4",
        disabled && "opacity-50",
        className
      )}
      onPress={toggleItem}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ expanded: open }}
      {...props}
    >
      {typeof children === "string" ? (
        <Text className="font-medium">{children}</Text>
      ) : (
        children
      )}
      <Ionicons
        name={open ? "chevron-up" : "chevron-down"}
        size={18}
        color="#555"
      />
    </Pressable>
  );
};

// Accordion Content Component
const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionContentProps) => {
  const { open } = useAccordionItemContext();

  const [animatedHeight] = useState(new Animated.Value(0));
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Measure the content height
  const measureContent = (event: any) => {
    const { height } = event.nativeEvent.layout;
    if (contentHeight === null || height > contentHeight) {
      setContentHeight(height);
    }
  };

  // Run animation when expanded state or content height changes
  useEffect(() => {
    if (contentHeight === null) return;

    if (isFirstRender) {
      // Set initial height without animation
      animatedHeight.setValue(open ? contentHeight : 0);
      setIsFirstRender(false);
      setIsReady(true);
      return;
    }

    Animated.timing(animatedHeight, {
      toValue: open ? contentHeight : 0,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [open, contentHeight, isFirstRender]);

  if (!isReady) {
    // Measure pass - invisible but still renders to get dimensions
    return (
      <View
        onLayout={measureContent}
        style={{ position: "absolute", opacity: 0, left: 0, right: 0 }}
      >
        {children}
      </View>
    );
  }

  return (
    <Animated.View
      style={{ height: animatedHeight, overflow: "hidden" }}
      className={cn("px-4", className)}
      {...props}
    >
      <View onLayout={measureContent}>{children}</View>
    </Animated.View>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
