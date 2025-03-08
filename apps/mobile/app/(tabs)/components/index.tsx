import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";

interface ComponentType {
  name: string;
  path: any;
}

const components: ComponentType[] = [
  { name: "Button", path: "/components/button" },
];

export default function ComponentsIndex() {
  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-6">Components</Text>

      <View className="space-y-2">
        {components.map((component) => (
          <Link key={component.name} href={component.path} asChild>
            <Pressable className="p-4 bg-gray-100 rounded-md">
              <Text className="text-lg">{component.name}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
