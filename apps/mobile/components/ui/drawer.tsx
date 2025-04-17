import React, { useEffect, useState, memo } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
  Easing,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type DrawerDirection = "left" | "right" | "top" | "bottom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  direction?: DrawerDirection;
  children: React.ReactNode;
  drawerWidth?: number | string;
  drawerHeight?: number | string;
  animationDuration?: number;
  overlayOpacity?: number;
  closeOnBackdropPress?: boolean;
  style?: any;
  backdropStyle?: any;
  useNativeDriver?: boolean;
  enableGestures?: boolean;
  accessibilityLabel?: string;
}

const Backdrop = memo(({ opacity, onPress, style }: any) => {
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: "rgba(0,0,0,0.4)" },
        { opacity },
        style,
      ]}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel="Close drawer"
      accessibilityHint="Closes the drawer when pressed"
    >
      <Pressable style={StyleSheet.absoluteFill} onPress={onPress} />
    </Animated.View>
  );
});

export const Drawer = ({
  open,
  onClose,
  children,
  direction = "left",
  drawerWidth,
  drawerHeight,
  animationDuration = 300,
  overlayOpacity = 0.4,
  closeOnBackdropPress = true,
  style,
  backdropStyle,
  useNativeDriver = true,
  enableGestures = true,
  accessibilityLabel = "Drawer menu",
}: DrawerProps) => {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const progress = useSharedValue(0);
  const [mounted, setMounted] = useState(false);

  // Calculate dimensions
  const finalDrawerWidth =
    typeof drawerWidth === "number" ? drawerWidth : width * 0.75;
  const finalDrawerHeight =
    typeof drawerHeight === "number" ? drawerHeight : height * 0.5;

  useEffect(() => {
    if (open) {
      setMounted(true);
      progress.value = withTiming(1, {
        duration: animationDuration,
        easing: Easing.out(Easing.cubic),
      });
    } else if (mounted) {
      progress.value = withTiming(
        0,
        {
          duration: animationDuration,
          easing: Easing.in(Easing.cubic),
        },
        (finished) => {
          if (finished) {
            runOnJS(setMounted)(false);
          }
        }
      );
    }
  }, [open, progress, animationDuration]);

  // Create swipe gesture based on direction
  const createSwipeGesture = () => {
    if (!enableGestures) return Gesture.Tap();

    const swipeDistance = 20; // minimum swipe distance to trigger close

    switch (direction) {
      case "left":
        return Gesture.Pan()
          .activeOffsetX(-swipeDistance)
          .onUpdate((event) => {
            if (event.translationX < -swipeDistance) {
              runOnJS(onClose)();
            }
          });
      case "right":
        return Gesture.Pan()
          .activeOffsetX(swipeDistance)
          .onUpdate((event) => {
            if (event.translationX > swipeDistance) {
              runOnJS(onClose)();
            }
          });
      case "top":
        return Gesture.Pan()
          .activeOffsetY(-swipeDistance)
          .onUpdate((event) => {
            if (event.translationY < -swipeDistance) {
              runOnJS(onClose)();
            }
          });
      case "bottom":
        return Gesture.Pan()
          .activeOffsetY(swipeDistance)
          .onUpdate((event) => {
            if (event.translationY > swipeDistance) {
              runOnJS(onClose)();
            }
          });
      default:
        return Gesture.Tap();
    }
  };

  const backdropGesture = Gesture.Tap().onEnd(() => {
    if (closeOnBackdropPress) {
      runOnJS(onClose)();
    }
  });

  const swipeGesture = createSwipeGesture();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX =
      direction === "left"
        ? interpolate(progress.value, [0, 1], [-finalDrawerWidth, 0])
        : direction === "right"
          ? interpolate(progress.value, [0, 1], [finalDrawerWidth, 0])
          : 0;

    const translateY =
      direction === "top"
        ? interpolate(progress.value, [0, 1], [-finalDrawerHeight, 0])
        : direction === "bottom"
          ? interpolate(progress.value, [0, 1], [finalDrawerHeight, 0])
          : 0;

    return {
      transform: [{ translateX }, { translateY }],
    };
  });

  const animatedBackdropStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(progress.value, [0, 1], [0, overlayOpacity]),
    };
  });

  if (!mounted) return null;

  const drawerPositionStyle = getDrawerPosition(direction, insets);

  const drawerSizeStyle = {
    width:
      direction === "left" || direction === "right" ? finalDrawerWidth : "100%",
    height:
      direction === "top" || direction === "bottom"
        ? finalDrawerHeight
        : "100%",
  };

  return (
    <View
      style={StyleSheet.absoluteFill}
      pointerEvents="box-none"
      accessibilityViewIsModal={true}
      accessibilityLabel={accessibilityLabel}
    >
      <GestureDetector gesture={backdropGesture}>
        <Backdrop
          opacity={animatedBackdropStyle.opacity}
          onPress={closeOnBackdropPress ? onClose : undefined}
          style={backdropStyle}
        />
      </GestureDetector>

      <GestureDetector gesture={swipeGesture}>
        <Animated.View
          style={[
            styles.drawer,
            drawerSizeStyle,
            drawerPositionStyle,
            animatedStyle,
            style,
          ]}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
        >
          {children}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

function getDrawerPosition(direction: DrawerDirection, insets: any) {
  switch (direction) {
    case "left":
      return { top: 0, bottom: 0, left: 0 };
    case "right":
      return { top: 0, bottom: 0, right: 0 };
    case "top":
      return { top: 0, left: 0, right: 0 };
    case "bottom":
      return {
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: insets.bottom,
      };
  }
}
