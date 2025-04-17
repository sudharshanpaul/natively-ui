// app/screens/DrawerDemo.tsx
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function DrawerDemo() {
  const [openDrawer, setOpenDrawer] = useState<
    null | "left" | "right" | "top" | "bottom"
  >(null);

  const directions = ["left", "right", "top", "bottom"] as const;

  return (
    <View className="flex-1 items-center justify-center space-y-4 bg-white dark:bg-black px-4">
      <Text className="text-2xl font-bold">Custom Drawer Example</Text>

      <View className="flex-row flex-wrap justify-center gap-4 mt-6">
        {directions.map((dir) => (
          <Button key={dir} onPress={() => setOpenDrawer(dir)}>
            Open {dir} drawer
          </Button>
        ))}
      </View>

      {directions.map((dir) => (
        <Drawer
          key={dir}
          open={openDrawer === dir}
          onClose={() => setOpenDrawer(null)}
          direction={dir}
        >
          <Text className="text-lg font-semibold mb-4">
            This is a {dir} drawer
          </Text>
          <Text className="text-zinc-600 dark:text-zinc-300 mb-6">
            You can put any content here. Close by tapping outside.
          </Text>
          <Button onPress={() => setOpenDrawer(null)}>Close</Button>
        </Drawer>
      ))}
    </View>
  );
}
