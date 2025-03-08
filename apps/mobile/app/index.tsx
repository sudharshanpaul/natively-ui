import { Button } from "@/components/ui/button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="default"
        onPress={() => router.navigate("/(tabs)/components")}
      >
        Go to components
      </Button>
    </View>
  );
}
