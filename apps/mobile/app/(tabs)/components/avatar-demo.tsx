import Avatar from "@/components/ui/avatar";
import React from "react";
import { View } from "react-native";

export default function AvatarExample() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Avatar src="https://github.com/shadcn.png" alt="John Doe" size="lg" />

      <Avatar alt="John Doe" variant="rounded" />

      <Avatar fallback="JD" size="xl" />
    </View>
  );
}
