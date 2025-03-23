import React from "react";
import { Text } from "react-native";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  PressableCard,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCardExample = () => {
  return (
    <PressableCard
      onPress={() => console.log("Card pressed")}
      className="max-w-sm"
    >
      <CardHeader>
        <CardTitle>Premium Headphones</CardTitle>
        <CardDescription>Noise cancelling wireless headphones</CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="mt-2">
          Experience crystal clear audio with our premium noise cancelling
          headphones featuring 30-hour battery life.
        </Text>
      </CardContent>
      <CardFooter className="flex-row justify-between">
        <Text className="font-semibold">$129.99</Text>
        <Button size="sm">Add to Cart</Button>
      </CardFooter>
    </PressableCard>
  );
};

export default ProductCardExample;
