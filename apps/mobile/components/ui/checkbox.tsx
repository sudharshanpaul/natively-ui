import React from "react";
import { Pressable, View, Text } from "react-native";
import { cn } from "@/lib/utils";
import Feather from "@expo/vector-icons/Feather";

export interface CheckboxProps {
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  className?: string;
  checkboxClassName?: string;
  labelClassName?: string;
}

export const Checkbox = React.forwardRef<View, CheckboxProps>(
  (
    {
      id,
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      required = false,
      label,
      className = "",
      checkboxClassName = "",
      labelClassName = "",
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked);

    // Use controlled or uncontrolled pattern
    const isControlled = checked !== undefined;
    const checkboxChecked = isControlled ? checked : isChecked;

    const handleToggle = () => {
      if (disabled) return;

      if (!isControlled) {
        setIsChecked(!isChecked);
      }

      onCheckedChange?.(!checkboxChecked);
    };

    // Base checkbox styles
    const baseCheckboxStyles =
      "h-5 w-5 justify-center items-center rounded border";

    // State styles
    const stateStyles = {
      checked: "bg-black border-gray-200",
      unchecked: "bg-white border-[#d1d5db]",
      disabled: "opacity-50",
    };

    // Combine all checkbox styles
    const checkboxStyles = cn(
      baseCheckboxStyles,
      checkboxChecked ? stateStyles.checked : stateStyles.unchecked,
      disabled && stateStyles.disabled,
      checkboxClassName
    );

    // Label styles
    const baseLabelStyles = "text-sm font-medium";
    const labelStyles = cn(
      baseLabelStyles,
      disabled && "opacity-70",
      labelClassName
    );

    return (
      <View ref={ref} className={cn("flex-row items-center gap-2", className)}>
        <Pressable
          accessibilityRole="checkbox"
          accessibilityState={{ checked: checkboxChecked, disabled }}
          accessibilityLabel={label}
          disabled={disabled}
          onPress={handleToggle}
          className={checkboxStyles}
          testID={id}
        >
          {checkboxChecked && (
            <Feather name="check" size={14} color="#ffffff" />
          )}
        </Pressable>

        {label && (
          <Pressable onPress={disabled ? undefined : handleToggle}>
            <Text className={labelStyles}>{label}</Text>
          </Pressable>
        )}
      </View>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
