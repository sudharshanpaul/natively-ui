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

type CollapsibleTriggerProps = PressableProps & {
  expanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  children: React.ReactNode;
};

type CollapsibleContentProps = ViewProps & {
  expanded?: boolean;
};

type CollapsibleProps = ViewProps & {
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
};

// Collapsible context
type CollapsibleContextType = {
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
};

const CollapsibleContext = React.createContext<
  CollapsibleContextType | undefined
>(undefined);

const useCollapsibleContext = () => {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error(
      "Collapsible components must be used within a Collapsible component"
    );
  }
  return context;
};

// Collapsible root component
const Collapsible = ({
  defaultExpanded = false,
  onExpandedChange,
  children,
  className,
  ...props
}: CollapsibleProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleExpandedChange = (value: boolean) => {
    setExpanded(value);
    onExpandedChange?.(value);
  };

  return (
    <CollapsibleContext.Provider
      value={{ expanded, onExpandedChange: handleExpandedChange }}
    >
      <View className={cn("", className)} {...props}>
        {children}
      </View>
    </CollapsibleContext.Provider>
  );
};

// Collapsible trigger component
const CollapsibleTrigger = ({
  children,
  className,
  expanded: expandedProp,
  onExpandedChange: onExpandedChangeProp,
  ...props
}: CollapsibleTriggerProps) => {
  const context = useCollapsibleContext();
  const expanded = expandedProp !== undefined ? expandedProp : context.expanded;
  const onExpandedChange = onExpandedChangeProp || context.onExpandedChange;

  return (
    <Pressable
      className={cn("flex-row items-center justify-between p-4", className)}
      onPress={() => onExpandedChange(!expanded)}
      {...props}
    >
      {typeof children === "string" ? <Text>{children}</Text> : children}
      <Ionicons
        name={expanded ? "chevron-up" : "chevron-down"}
        size={18}
        color="#555"
      />
    </Pressable>
  );
};

// Improved Collapsible content component
const CollapsibleContent = ({
  children,
  className,
  expanded: expandedProp,
  ...props
}: CollapsibleContentProps) => {
  const context = useCollapsibleContext();
  const expanded = expandedProp !== undefined ? expandedProp : context.expanded;

  const [animatedHeight] = useState(new Animated.Value(0));
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Measure the content height
  const measureContent = (event: any) => {
    const { height } = event.nativeEvent.layout;
    if (contentHeight === null || height > contentHeight) {
      setContentHeight(height * 1.5);
    }
  };

  // Run animation when expanded state or content height changes
  useEffect(() => {
    if (contentHeight === null) return;

    if (isFirstRender) {
      // Set initial height without animation
      animatedHeight.setValue(expanded ? contentHeight : 0);
      setIsFirstRender(false);
      setIsReady(true);
      return;
    }

    Animated.timing(animatedHeight, {
      toValue: expanded ? contentHeight : 0,
      duration: 250,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [expanded, contentHeight, isFirstRender]);

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
      className={cn("", className)}
      {...props}
    >
      <View onLayout={measureContent}>{children}</View>
    </Animated.View>
  );
};

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
