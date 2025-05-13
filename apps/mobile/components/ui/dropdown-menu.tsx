import React, {
  createContext,
  useContext,
  useState,
  useRef,
  ReactNode,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  StyleSheet,
  Dimensions,
  LayoutRectangle,
  GestureResponderEvent,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { cn } from "@/lib/utils";

// Types
type Position = {
  pageX: number;
  pageY: number;
  width: number;
  height: number;
};

interface DropdownMenuContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerPosition: Position | null;
  setTriggerPosition: (position: Position) => void;
}

interface SubDropdownMenuContextProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerPosition: Position | null;
  setTriggerPosition: (position: Position) => void;
}

// Type for components that can receive forwarded props
interface PressableComponentProps {
  onPress?: (event: GestureResponderEvent) => void;
  ref?: React.Ref<View>;
}

// Context
const DropdownMenuContext = createContext<DropdownMenuContextProps>({
  open: false,
  setOpen: () => {},
  triggerPosition: null,
  setTriggerPosition: () => {},
});

const SubDropdownMenuContext = createContext<SubDropdownMenuContextProps>({
  open: false,
  setOpen: () => {},
  triggerPosition: null,
  setTriggerPosition: () => {},
});

// Main Components
export function DropdownMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState<Position | null>(null);

  return (
    <DropdownMenuContext.Provider
      value={{ open, setOpen, triggerPosition, setTriggerPosition }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({
  children,
  asChild = false,
}: {
  children: ReactNode;
  asChild?: boolean;
}) {
  const { open, setOpen, setTriggerPosition } = useContext(DropdownMenuContext);
  const triggerRef = useRef<View>(null);

  const handlePress = (e?: GestureResponderEvent) => {
    if (triggerRef.current) {
      triggerRef.current.measure((x, y, width, height, pageX, pageY) => {
        setTriggerPosition({ pageX, pageY, width, height });
        setOpen(!open);
      });
    }
  };

  if (asChild && React.isValidElement(children)) {
    // Safely cast the children to handle props
    return React.cloneElement(
      children as React.ReactElement<PressableComponentProps>,
      {
        onPress: handlePress,
        ref: triggerRef,
      }
    );
  }

  return (
    <Pressable ref={triggerRef} onPress={handlePress}>
      {children}
    </Pressable>
  );
}

export function DropdownMenuContent({
  children,
  className,
  sideOffset = 4,
  align = "start", // "start", "center", "end"
}: {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
  align?: "start" | "center" | "end";
}) {
  const { open, setOpen, triggerPosition } = useContext(DropdownMenuContext);
  const translateY = useSharedValue(-10);
  const opacity = useSharedValue(0);
  const contentRef = useRef<View>(null);
  const [contentLayout, setContentLayout] = useState<LayoutRectangle | null>(
    null
  );

  const windowWidth = Dimensions.get("window").width;

  React.useEffect(() => {
    if (open) {
      translateY.value = withSpring(0);
      opacity.value = withTiming(1, { duration: 150 });
    } else {
      translateY.value = withTiming(-10, { duration: 150 });
      opacity.value = withTiming(0, { duration: 150 });
    }
  }, [open]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });

  const getContentPosition = () => {
    if (!triggerPosition) return { top: 0, left: 0 };

    const contentWidth = contentLayout?.width || 160; // Default width if not measured yet
    let left = 0;

    switch (align) {
      case "start":
        left = triggerPosition.pageX;
        break;
      case "center":
        left =
          triggerPosition.pageX + triggerPosition.width / 2 - contentWidth / 2;
        break;
      case "end":
        left = triggerPosition.pageX + triggerPosition.width - contentWidth;
        break;
    }

    // Ensure the dropdown stays within screen bounds
    if (left < 10) left = 10;
    if (left + contentWidth > windowWidth - 10)
      left = windowWidth - contentWidth - 10;

    return {
      top: triggerPosition.pageY + triggerPosition.height + sideOffset,
      left,
    };
  };

  if (!open || !triggerPosition) return null;

  return (
    <Modal
      visible={open}
      transparent
      animationType="none"
      onRequestClose={() => setOpen(false)}
    >
      <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
        <Animated.View
          ref={contentRef}
          style={[styles.content, getContentPosition(), animatedStyle]}
          className={cn(
            "min-w-[10rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-950",
            className
          )}
          onLayout={(e) => setContentLayout(e.nativeEvent.layout)}
        >
          <ScrollView
            scrollEnabled
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: Dimensions.get("window").height * 0.6 }}
          >
            {children}
          </ScrollView>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

export function DropdownMenuItem({
  children,
  className,
  disabled = false,
  onPress,
}: {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onPress?: () => void;
}) {
  const { setOpen } = useContext(DropdownMenuContext);

  const handlePress = () => {
    if (disabled) return;
    if (onPress) onPress();
    setOpen(false);
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={handlePress}
      className={cn(
        "relative flex flex-row items-center rounded-sm px-2 py-1.5",
        disabled ? "opacity-50" : "active:bg-zinc-100 dark:active:bg-zinc-800",
        className
      )}
      style={({ pressed }) => [
        {
          backgroundColor: !disabled && pressed ? "#f4f4f5" : "transparent",
        },
        disabled && { opacity: 0.5 },
      ]}
    >
      {children}
    </Pressable>
  );
}

export function DropdownMenuLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <View className={cn("px-2 py-1.5", className)}>
      <Text className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        {children}
      </Text>
    </View>
  );
}

export function DropdownMenuSeparator({ className }: { className?: string }) {
  return (
    <View className={cn("h-px my-1 bg-zinc-200 dark:bg-zinc-800", className)} />
  );
}

export function DropdownMenuGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <View className={cn("", className)}>{children}</View>;
}

export function DropdownMenuShortcut({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Text
      className={cn("ml-auto text-xs tracking-widest text-zinc-500", className)}
    >
      {children}
    </Text>
  );
}

// Sub Dropdown components
export function DropdownMenuSub({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState<Position | null>(null);

  return (
    <SubDropdownMenuContext.Provider
      value={{ open, setOpen, triggerPosition, setTriggerPosition }}
    >
      {children}
    </SubDropdownMenuContext.Provider>
  );
}

export function DropdownMenuSubTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open, setOpen, setTriggerPosition } = useContext(
    SubDropdownMenuContext
  );
  const triggerRef = useRef<View>(null);

  const handlePress = () => {
    if (triggerRef.current) {
      triggerRef.current.measure((x, y, width, height, pageX, pageY) => {
        setTriggerPosition({ pageX, pageY, width, height });
        setOpen(!open);
      });
    }
  };

  return (
    <Pressable
      ref={triggerRef}
      onPress={handlePress}
      className={cn(
        "flex flex-row items-center justify-between rounded-sm px-2 py-1.5",
        open
          ? "bg-zinc-100 dark:bg-zinc-800"
          : "active:bg-zinc-100 dark:active:bg-zinc-800",
        className
      )}
      style={({ pressed }) => [
        {
          backgroundColor: pressed || open ? "#f4f4f5" : "transparent",
        },
      ]}
    >
      {children}
      <Text className="ml-auto pl-2 text-zinc-500">▶</Text>
    </Pressable>
  );
}

export function DropdownMenuPortal({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function DropdownMenuSubContent({
  children,
  className,
  sideOffset = 4,
}: {
  children: ReactNode;
  className?: string;
  sideOffset?: number;
}) {
  const { open, setOpen, triggerPosition } = useContext(SubDropdownMenuContext);
  const translateY = useSharedValue(0);
  const translateX = useSharedValue(-5);
  const opacity = useSharedValue(0);
  const [contentLayout, setContentLayout] = useState<LayoutRectangle | null>(
    null
  );

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  React.useEffect(() => {
    if (open) {
      translateX.value = withSpring(0);
      opacity.value = withTiming(1, { duration: 150 });
    } else {
      translateX.value = withTiming(-5, { duration: 150 });
      opacity.value = withTiming(0, { duration: 150 });
    }
  }, [open]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      opacity: opacity.value,
    };
  });

  const getContentPosition = () => {
    if (!triggerPosition) return { top: 0, left: 0 };

    const contentWidth = contentLayout?.width || 160;
    const contentHeight = contentLayout?.height || 200;

    let left = triggerPosition.pageX + triggerPosition.width + sideOffset;
    let top = triggerPosition.pageY;

    // Ensure menu stays within screen bounds
    if (left + contentWidth > windowWidth - 10) {
      // Show on left side if not enough space on right
      left = triggerPosition.pageX - contentWidth - sideOffset;
    }

    if (top + contentHeight > windowHeight - 40) {
      // Adjust vertical position if needed
      top = windowHeight - contentHeight - 40;
    }

    return { top, left };
  };

  if (!open || !triggerPosition) return null;

  return (
    <Modal
      visible={open}
      transparent
      animationType="none"
      onRequestClose={() => setOpen(false)}
    >
      <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
        <Animated.View
          style={[styles.content, getContentPosition(), animatedStyle]}
          className={cn(
            "min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 shadow-lg dark:border-zinc-800 dark:bg-zinc-950",
            className
          )}
          onLayout={(e) => setContentLayout(e.nativeEvent.layout)}
        >
          <ScrollView
            scrollEnabled
            showsVerticalScrollIndicator={false}
            style={{ maxHeight: Dimensions.get("window").height * 0.5 }}
          >
            {children}
          </ScrollView>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

// Styles
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 5,
  },
});
