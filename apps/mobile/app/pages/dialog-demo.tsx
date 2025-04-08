import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@/components/ui/button";
import Dialog, { AlertDialog } from "@/components/ui/dialog";

export default function DialogDemo() {
  const [basicDialogOpen, setBasicDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);

  return (
    <View className="p-4 h-full flex flex-col items-center justify-center gap-2 space-y-4">
      {/* Basic Dialog */}
      <Button onPress={() => setBasicDialogOpen(true)}>
        Open Basic Dialog
      </Button>
      <Dialog
        isOpen={basicDialogOpen}
        onClose={() => setBasicDialogOpen(false)}
        title="Basic Dialog"
        description="This is a customizable dialog component."
        footer={
          <Button onPress={() => setBasicDialogOpen(false)} className="ml-auto">
            Close
          </Button>
        }
      >
        <Text>This is the content of the dialog.</Text>
      </Dialog>

      {/* Alert Dialog */}
      <Button variant="destructive" onPress={() => setAlertDialogOpen(true)}>
        Open Alert Dialog
      </Button>
      <AlertDialog
        isOpen={alertDialogOpen}
        onClose={() => setAlertDialogOpen(false)}
        title="Confirm Action"
        description="Are you sure you want to perform this action?"
        confirmText="Confirm"
        cancelText="Cancel"
        onConfirm={() => console.log("Confirmed")}
        danger
      />
    </View>
  );
}
