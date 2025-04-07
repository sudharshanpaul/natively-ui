import React from "react";
import { View } from "react-native";
import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxDemo() {
  return (
    <View className="flex-row justify-center h-full items-center gap-2">
      <Checkbox
        id="terms"
        label="Accept terms and conditions"
        onCheckedChange={(checked) => console.log("Checked:", checked)}
      />
    </View>
  );
}
