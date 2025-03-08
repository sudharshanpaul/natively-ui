import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="components/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="components/button"
        options={{
          title: "Components",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cubes" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
