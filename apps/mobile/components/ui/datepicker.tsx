import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Feather from "@expo/vector-icons/Feather";

// Helper functions for date manipulation
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export interface DatePickerProps {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  calendarClassName?: string;
  disabledDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
}

type CalendarDay =
  | { type: "filler" }
  | {
      type: "day";
      date: Date;
      isDisabled: boolean;
      isToday: boolean;
      isSelected: boolean;
    };

export const DatePicker = ({
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled = false,
  placeholder = "Select date",
  className = "",
  buttonClassName = "",
  calendarClassName = "",
  disabledDates = [],
  minDate,
  maxDate,
}: DatePickerProps) => {
  const today = new Date();
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<Date | undefined>(
    defaultValue
  );
  const [viewingMonth, setViewingMonth] = useState(today.getMonth());
  const [viewingYear, setViewingYear] = useState(today.getFullYear());

  // For controlled component support
  const isControlled = controlledValue !== undefined;
  const selectedDate = isControlled ? controlledValue : internalValue;

  const windowWidth = Dimensions.get("window").width;
  const calendarWidth = Math.min(windowWidth - 32, 350);

  // Format date for display
  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDateSelect = (date: Date) => {
    if (!isControlled) {
      setInternalValue(date);
    }
    onValueChange?.(date);
    setIsOpen(false);
  };

  const nextMonth = () => {
    if (viewingMonth === 11) {
      setViewingMonth(0);
      setViewingYear(viewingYear + 1);
    } else {
      setViewingMonth(viewingMonth + 1);
    }
  };

  const prevMonth = () => {
    if (viewingMonth === 0) {
      setViewingMonth(11);
      setViewingYear(viewingYear - 1);
    } else {
      setViewingMonth(viewingMonth - 1);
    }
  };

  const isDateDisabled = (date: Date) => {
    // Check if date is in disabledDates array
    const isDisabled = disabledDates.some(
      (disabledDate) =>
        disabledDate.getDate() === date.getDate() &&
        disabledDate.getMonth() === date.getMonth() &&
        disabledDate.getFullYear() === date.getFullYear()
    );

    // Check if date is out of min/max range
    const isBelowMin = minDate && date < minDate;
    const isAboveMax = maxDate && date > maxDate;

    return isDisabled || isBelowMin || isAboveMax;
  };

  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date) => {
    return (
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Generate calendar days
  const calendarDays: CalendarDay[] = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewingYear, viewingMonth);
    const firstDayOfMonth = getFirstDayOfMonth(viewingYear, viewingMonth);
    const days: CalendarDay[] = [];

    // Previous month filler days
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ type: "filler" } as CalendarDay);
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(viewingYear, viewingMonth, i);
      days.push({
        type: "day",
        date,
        isDisabled: isDateDisabled(date) || false, // Ensure boolean
        isToday: isToday(date),
        isSelected: isSelected(date) || false, // Ensure boolean
      });
    }

    // Fill remaining grid with empty spaces for alignment
    const totalCells = Math.ceil(days.length / 7) * 7;
    while (days.length < totalCells) {
      days.push({ type: "filler" } as CalendarDay);
    }

    return days;
  }, [
    viewingMonth,
    viewingYear,
    selectedDate,
    disabledDates,
    minDate,
    maxDate,
  ]);

  const toggleCalendar = () => {
    if (disabled) return;

    if (!isOpen && selectedDate) {
      setViewingMonth(selectedDate.getMonth());
      setViewingYear(selectedDate.getFullYear());
    }

    setIsOpen(!isOpen);
  };

  return (
    <View className={cn("relative", className)}>
      {/* Date Picker Button */}
      <Pressable
        onPress={toggleCalendar}
        disabled={disabled}
        className={cn(
          "flex-row items-center justify-between h-10 px-4 rounded-md border border-[#e2e8f0] bg-white",
          disabled && "opacity-50",
          buttonClassName
        )}
        accessibilityRole="button"
        accessibilityLabel="Select date"
      >
        <Text
          className={cn(
            "text-sm flex-1",
            selectedDate ? "text-[#111111]" : "text-[#71717a]"
          )}
        >
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </Text>
        <Feather name="calendar" size={18} color="#71717a" />
      </Pressable>

      {/* Calendar Modal */}
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setIsOpen(false)}
          className="bg-black/20 justify-center items-center"
        >
          <View
            className={cn("bg-white rounded-lg shadow p-4", calendarClassName)}
            style={{ width: calendarWidth }}
          >
            {/* Calendar Header */}
            <View className="flex-row justify-between items-center mb-4">
              <Button
                variant="ghost"
                size="icon"
                onPress={prevMonth}
                className="h-8 w-8"
              >
                <Entypo name="chevron-left" size={18} color="#71717a" />
              </Button>

              <Text className="font-medium">
                {MONTHS[viewingMonth]} {viewingYear}
              </Text>

              <Button
                variant="ghost"
                size="icon"
                onPress={nextMonth}
                className="h-8 w-8"
              >
                <Entypo name="chevron-right" size={18} color="#71717a" />
              </Button>
            </View>

            {/* Day Names */}
            <View className="flex-row justify-between mb-2">
              {DAYS.map((day) => (
                <View key={day} className="flex-1 items-center">
                  <Text className="text-xs text-[#71717a]">{day}</Text>
                </View>
              ))}
            </View>

            {/* Calendar Days */}
            <View className="flex-row flex-wrap">
              {calendarDays.map((day, index) => {
                if (day.type === "filler") {
                  return (
                    <View
                      key={`filler-${index}`}
                      style={{ width: calendarWidth / 7 }}
                      className="h-10 items-center justify-center"
                    />
                  );
                }

                // Now TypeScript knows `day.date` is defined
                return (
                  <Pressable
                    key={`day-${day.date.toISOString()}`}
                    style={{ width: calendarWidth / 7 }}
                    className={cn(
                      "h-10 items-center justify-center",
                      day.isSelected && "bg-[#2973B2] rounded-full",
                      day.isToday &&
                        !day.isSelected &&
                        "border border-[#2973B2] rounded-full"
                    )}
                    onPress={() => {
                      if (!day.isDisabled) {
                        handleDateSelect(day.date);
                      }
                    }}
                    disabled={day.isDisabled}
                  >
                    <Text
                      className={cn(
                        "text-sm",
                        day.isSelected && "text-white font-medium",
                        day.isToday &&
                          !day.isSelected &&
                          "text-[#2973B2] font-medium",
                        day.isDisabled && "text-[#d1d5db]"
                      )}
                    >
                      {day.date.getDate()}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* Footer Actions */}
            <View className="flex-row justify-end mt-4 pt-2 border-t border-[#e2e8f0]">
              <Button
                variant="ghost"
                size="sm"
                onPress={() => setIsOpen(false)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button
                variant="default"
                size="sm"
                onPress={() => {
                  handleDateSelect(new Date());
                }}
              >
                Today
              </Button>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default DatePicker;
