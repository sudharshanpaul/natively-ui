import React from "react";
import { View, Text } from "react-native";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const FAQItem = () => {
  return (
    <Collapsible className="border border-gray-200 rounded-md mb-2">
      <CollapsibleTrigger className="bg-gray-50">
        <Text className="font-medium">How do I reset my password?</Text>
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4">
        <Text>
          To reset your password, go to the login screen and tap on "Forgot
          Password". Follow the instructions sent to your email to create a new
          password.To reset your password, go to the login screen and tap on "Forgot
          Password". Follow the instructions sent to your email to create a new
          password.To reset your password, go to the login screen and tap on "Forgot
          Password". Follow the instructions sent to your email to create a new
          password.
        </Text>
      </CollapsibleContent>
    </Collapsible>
  );
};

const FAQScreen = () => {
  return (
    <View className="p-4 h-screen">
      <Text className="text-xl font-bold mb-4">Frequently Asked Questions</Text>

      <FAQItem />

      <Collapsible className="border border-gray-200 rounded-md mb-2">
        <CollapsibleTrigger className="bg-gray-50">
          <Text className="font-medium">How do I update my profile?</Text>
        </CollapsibleTrigger>
        <CollapsibleContent className="p-4">
          <Text>
            You can update your profile by navigating to the Profile tab and
            tapping the "Edit" button. From there, you can change your personal
            information, profile picture, and notification preferences.
          </Text>
        </CollapsibleContent>
      </Collapsible>
    </View>
  );
};

export default FAQScreen;
