import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function AlertDialogExample() {
  const [result, setResult] = useState<string | null>(null);

  return (
    <View className="flex-1 items-center justify-center p-4">
      {/* Standard usage without asChild */}
      <AlertDialog>
        <AlertDialogTrigger className="bg-red-500 py-2 px-4 rounded-xl">
          <Text className="text-white">Delete Account</Text>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onPress={() => setResult("Account deleted!")}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Example with Button component as trigger */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="mt-6 rounded-xl">
            Custom Button Trigger
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Action</AlertDialogTitle>
            <AlertDialogDescription>
              This is an example with a styled Button component as trigger.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onPress={() => setResult("Action confirmed!")}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {result && <Text className="mt-4 text-center">{result}</Text>}
    </View>
  );
}
