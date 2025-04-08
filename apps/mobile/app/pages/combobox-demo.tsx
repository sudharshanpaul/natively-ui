import React, { useState } from "react";
import { View, Text } from "react-native";
import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function ComboboxDemo() {
  const [value, setValue] = useState("");

  return (
    <View className="px-4 py-8 w-full h-full flex justify-center items-center">
      <Combobox
        items={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search framework..."
        emptyMessage="No framework found."
        width={250}
      />

      <Text className="mt-4">
        Selected:{" "}
        {value ? frameworks.find((f) => f.value === value)?.label : "None"}
      </Text>
    </View>
  );
}
