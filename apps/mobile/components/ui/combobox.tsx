import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  Modal,
  Keyboard,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { cn } from "@/lib/utils";
import Feather from "@expo/vector-icons/Feather"
import Ionicons from '@expo/vector-icons/Ionicons';

export interface ComboboxItem {
  value: string;
  label: string;
}

export interface ComboboxProps {
  items: ComboboxItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  width?: number;
  maxHeight?: number;
}

export const Combobox = ({
  items,
  defaultValue = "",
  value: controlledValue,
  onValueChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  disabled = false,
  className = "",
  buttonClassName = "",
  contentClassName = "",
  width = 300,
  maxHeight = 300,
}: ComboboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<TextInput>(null);
  const windowHeight = Dimensions.get("window").height;

  // Controlled vs uncontrolled handling
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedItem = items.find((item) => item.value === value);

  const handleSelect = (selectedValue: string) => {
    if (!isControlled) {
      setInternalValue(selectedValue === value ? "" : selectedValue);
    }

    onValueChange?.(selectedValue === value ? "" : selectedValue);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
    Keyboard.dismiss();
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <View className={cn("relative", className)}>
      {/* Trigger Button */}
      <Pressable
        onPress={toggleOpen}
        disabled={disabled}
        className={cn(
          "flex-row items-center justify-between h-10 px-4 rounded-md border border-[#e2e8f0] bg-white",
          disabled && "opacity-50",
          buttonClassName
        )}
        style={{ width }}
        accessible={true}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
        accessibilityLabel={placeholder}
      >
        <Text
          className={cn(
            "text-sm",
            selectedItem ? "text-[#111111]" : "text-[#71717a]"
          )}
          numberOfLines={1}
        >
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        <Ionicons name="chevron-expand" size={16} color="#71717a" />
        
      </Pressable>

      {/* Dropdown Modal */}
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={closeDropdown}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={closeDropdown}
          className="bg-black/20"
        >
          <View
            className={cn(
              "bg-white rounded-md border border-[#e2e8f0] overflow-hidden",
              contentClassName
            )}
            style={{
              width,
              maxHeight: Math.min(maxHeight, windowHeight * 0.7),
              position: "absolute",
              top: "20%",
              left: "50%",
              marginLeft: -width / 2,
            }}
          >
            {/* Search Input */}
            <View className="flex-row items-center border-b border-[#e2e8f0] px-3">
              <Feather name="search" size={16} color="#71717a" />
              <TextInput
                ref={inputRef}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder={searchPlaceholder}
                className="flex-1 ml-2 text-sm text-[#111111]"
                autoCapitalize="none"
              />
              {searchQuery.length > 0 && (
                <Pressable onPress={() => setSearchQuery("")}>
                  <Feather name="x" size={16} color="#71717a" />
                </Pressable>
              )}
            </View>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <View className="py-3 px-4">
                <Text className="text-sm text-[#71717a] text-center">
                  {emptyMessage}
                </Text>
              </View>
            )}

            {/* Items List */}
            <FlatList
              data={filteredItems}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleSelect(item.value)}
                  className={cn(
                    "flex-row items-center justify-between py-2 px-4",
                    value === item.value ? "bg-[#f1f5f9]" : "bg-transparent"
                  )}
                  accessible={true}
                  accessibilityRole="menuitem"
                >
                  <Text className="text-sm text-[#111111]">{item.label}</Text>
                  {value === item.value && <Feather name="check" size={16} color="#2973B2" />}
                </Pressable>
              )}
              keyboardShouldPersistTaps="handled"
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default Combobox;
