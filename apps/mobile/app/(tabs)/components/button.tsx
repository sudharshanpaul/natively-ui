import { Button } from "@/components/ui/button";
import React from "react";
import { View, Text, ScrollView } from "react-native";

export default function ButtonDemo() {
  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-xl font-bold mb-6">Button Component</Text>

      <Text className="text-lg font-semibold mb-2">Default</Text>
      <View className="mb-4">
        <Button onPress={() => console.log("Default button pressed")}>
          Default Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Destructive</Text>
      <View className="mb-4">
        <Button
          variant="destructive"
          onPress={() => console.log("Destructive button pressed")}
        >
          Destructive Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Sizes</Text>
      <View className="space-y-2 mb-4">
        <Button size="sm">Small Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="lg">Large Button</Button>
      </View>
    </ScrollView>
  );
}
