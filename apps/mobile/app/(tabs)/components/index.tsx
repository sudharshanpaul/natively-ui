import React from "react";
import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { Href, Link } from "expo-router";

interface ComponentType {
  name: string;
  path: Href;
}

const components: ComponentType[] = [
  { name: "Button", path: "/pages/button-demo" },
  { name: "Alert Dialog", path: "/pages/alert-demo" },
  { name: "Avatar", path: "/pages/avatar-demo" },
  { name: "Badge", path: "/pages/badge-demo" },
  { name: "Card", path: "/pages/card-demo" },
  { name: "Collapsible", path: "/pages/collapsible-demo" },
  { name: "Accordion", path: "/pages/accordion-demo" },
  { name: "Checkbox", path: "/pages/checkbox-demo" },
  { name: "Combobox", path: "/pages/combobox-demo" },
  { name: "Datepicker", path: "/pages/datepicker-demo" },
];

export default function ComponentsIndex() {
  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-6">Components</Text>

      <View className="gap-4">
        {components.map((component) => (
          <Link key={component.name} href={component.path} asChild>
            <Pressable className="p-4 bg-slate-200 rounded-lg">
              <Text className="text-lg text-center">{component.name}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
