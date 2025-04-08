import React from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Feather from "@expo/vector-icons/Feather";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
}

export const Dialog = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className = "",
  contentClassName = "",
  overlayClassName = "",
}: DialogProps) => {
  const windowWidth = Dimensions.get("window").width;
  const dialogWidth = Math.min(windowWidth - 32, 400);

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={onClose}
        className={cn(
          "bg-black/20 justify-center items-center",
          overlayClassName
        )}
      >
        <View
          className={cn("bg-white rounded-lg shadow p-0", className)}
          style={{ width: dialogWidth }}
        >
          {/* Dialog Header */}
          {(title || description) && (
            <View className="p-6">
              {title && (
                <View className="flex-row justify-between items-center">
                  <Text className="text-xl font-semibold text-[#111111]">
                    {title}
                  </Text>
                  <Pressable
                    onPress={onClose}
                    accessibilityLabel="Close dialog"
                  >
                    <Feather name="x" size={20} color="#71717a" />
                  </Pressable>
                </View>
              )}
              {description && (
                <Text className="text-sm text-[#71717a] mt-2">
                  {description}
                </Text>
              )}
            </View>
          )}

          {/* Dialog Content */}
          {children && (
            <View className={cn("p-6", contentClassName)}>{children}</View>
          )}

          {/* Dialog Footer */}
          {footer && (
            <View className="flex-row justify-end p-4 pt-2">{footer}</View>
          )}
        </View>
      </Pressable>
    </Modal>
  );
};

// Common use case component with default actions
export interface AlertDialogProps extends Omit<DialogProps, "footer"> {
  cancelText?: string;
  confirmText?: string;
  onConfirm?: () => void;
  danger?: boolean;
}

export const AlertDialog = ({
  cancelText = "Cancel",
  confirmText = "OK",
  onConfirm,
  danger = false,
  ...props
}: AlertDialogProps) => {
  return (
    <Dialog
      {...props}
      footer={
        <>
          <Button
            variant="ghost"
            size="sm"
            onPress={props.onClose}
            className="mr-2"
          >
            {cancelText}
          </Button>
          <Button
            variant={danger ? "destructive" : "default"}
            size="sm"
            onPress={() => {
              onConfirm?.();
              props.onClose();
            }}
          >
            {confirmText}
          </Button>
        </>
      }
    />
  );
};

export default Dialog;
