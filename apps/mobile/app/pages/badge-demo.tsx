import { Badge } from "@/components/ui/badge";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

export default function BadgeExample() {
  return (
    <View className="h-screen flex flex-col gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="outline" size="lg">
        Large Outline
      </Badge>
      <Badge
        variant="warning"
        icon={<FontAwesome name="exclamation-circle" size={12} color="white" />}
      >
        Warning
      </Badge>
    </View>
  );
}
