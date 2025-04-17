import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { cn } from "@/lib/utils";

const { width, height } = Dimensions.get("window");

export type DrawerDirection = "left" | "right" | "top" | "bottom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  direction?: DrawerDirection;
  children: React.ReactNode;
  drawerWidth?: number;
  drawerHeight?: number;
}

export const Drawer = ({
  open,
  onClose,
  children,
  direction = "left",
  drawerWidth = width * 0.75,
  drawerHeight = height * 0.5,
}: DrawerProps) => {
  const progress = useSharedValue(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      progress.value = withTiming(1, { duration: 300 });
    } else {
      progress.value = withTiming(0, { duration: 300 }, (finished) => {
        if (finished) {
          runOnJS(setMounted)(false);
        }
      });
    }
  }, [open, progress]);

  const gesture = Gesture.Tap().onEnd(() => {
    onClose();
  });

  const animatedStyle = useAnimatedStyle(() => {
    const translateX =
      direction === "left"
        ? interpolate(progress.value, [0, 1], [-drawerWidth, 0])
        : direction === "right"
          ? interpolate(progress.value, [0, 1], [drawerWidth, 0])
          : 0;

    const translateY =
      direction === "top"
        ? interpolate(progress.value, [0, 1], [-drawerHeight, 0])
        : direction === "bottom"
          ? interpolate(progress.value, [0, 1], [drawerHeight, 0])
          : 0;

    return {
      transform: [{ translateX }, { translateY }],
      opacity: progress.value,
    };
  });

  if (!mounted) return null;

  return (
    <View className="absolute inset-0 z-50">
      <GestureDetector gesture={gesture}>
        <Animated.View
          className="absolute inset-0 bg-black/40"
          style={{ opacity: progress }}
        />
      </GestureDetector>

      <Animated.View
        style={[
          {
            position: "absolute",
            width:
              direction === "left" || direction === "right"
                ? drawerWidth
                : "100%",
            height:
              direction === "top" || direction === "bottom"
                ? drawerHeight
                : "100%",
            backgroundColor: "white",
          },
          getDrawerPosition(direction),
          animatedStyle,
        ]}
        className={cn("p-4 rounded-md dark:bg-zinc-900")}
      >
        {children}
      </Animated.View>
    </View>
  );
};

function getDrawerPosition(direction: DrawerDirection) {
  switch (direction) {
    case "left":
      return { top: 0, bottom: 0, left: 0 };
    case "right":
      return { top: 0, bottom: 0, right: 0 };
    case "top":
      return { top: 0, left: 0, right: 0 };
    case "bottom":
      return { bottom: 0, left: 0, right: 0 };
  }
}
