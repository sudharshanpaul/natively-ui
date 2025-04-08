import DatePicker from "@/components/ui/datepicker";
import React, { useState } from "react";
import { View, Text } from "react-native";

export default function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  
  return (
    <View className="p-4">
      <Text className="text-base font-medium mb-2">Select a date:</Text>
      <DatePicker
        value={date}
        onValueChange={setDate}
        placeholder="Pick a date"
        minDate={new Date()} // Disable past dates
      />
      
      {date && (
        <Text className="mt-4">
          Selected: {date.toLocaleDateString()}
        </Text>
      )}
    </View>
  );
}