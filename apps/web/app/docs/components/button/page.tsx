// pages/docs/components/button.tsx
import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ButtonDocPage() {
  // Component example code snippets
  const basicUsageCode = `import { Button } from "@/components/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Button>Default Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button isLoading>Loading Button</Button>
    </div>
  );
}`;

  const variantsCode = `<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`;

  const sizesCode = `<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>`;

  const withIconsCode = `import { Bell, ArrowRight } from "lucide-react-native";

<Button leftIcon={<Bell size={16} />}>Notifications</Button>
<Button rightIcon={<ArrowRight size={16} />}>Next</Button>
<Button leftIcon={<Bell size={16} />} rightIcon={<ArrowRight size={16} />}>
  All Notifications
</Button>`;

  const loadingStateCode = `<Button isLoading>Loading</Button>
<Button isLoading variant="outline">Loading</Button>`;

  const asLinksCode = `<Button href="/dashboard">Go to Dashboard</Button>`;

  const buttonImplementationCode = `import React from "react";
import { Text, Pressable, ActivityIndicator, View } from "react-native";
import { Href, router } from "expo-router";
import { cn } from "@/lib/utils";

export interface ButtonProps {
  children?: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: () => void;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  textClassName?: string;
}

export const Button = ({
  children,
  variant = "default",
  size = "default",
  disabled = false,
  isLoading = false,
  onPress,
  href,
  leftIcon,
  rightIcon,
  className = "",
  textClassName = "",
}: ButtonProps) => {
  // Base button styles
  const baseButtonStyles = "items-center justify-center rounded-lg";

  // Variant styles
  const variantStyles = {
    default: "bg-[#2973B2]",
    destructive: "bg-[#D84040]",
    outline: "border border-[#e2e8f0] bg-[#ffffff]",
    secondary: "bg-[#e3dede]",
    ghost: "bg-transparent",
    link: "bg-transparent",
  };

  // Size styles
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 rounded-lg",
    lg: "h-12 px-8 rounded-lg",
    icon: "h-10 w-10",
  };

  // Text styles
  const baseTextStyles = "font-medium";
  const textVariantStyles = {
    default: "text-white",
    destructive: "text-white",
    outline: "text-[#111111]",
    secondary: "text-[#111111]",
    ghost: "text-[#111111]",
    link: "text-blue underline",
  };
  const textSizeStyles = {
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
    icon: "text-base",
  };

  // Combine all button styles
  const buttonStyles = cn(
    baseButtonStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50",
    className
  );

  const textStyles = cn(
    baseTextStyles,
    textVariantStyles[variant],
    textSizeStyles[size],
    textClassName
  );

  const handlePress = () => {
    if (disabled || isLoading) return;

    if (href) {
      router.push(href as Href);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      className={buttonStyles}
      disabled={disabled || isLoading}
    >
      <View className="flex-row items-center gap-2 justify-center">
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={
              variant === "outline" || variant === "ghost" || variant === "link"
                ? "#000"
                : "#fff"
            }
          />
        ) : leftIcon ? (
          <View>{leftIcon}</View>
        ) : null}

        {children && <Text className={textStyles}>{children}</Text>}

        {rightIcon && !isLoading && <View>{rightIcon}</View>}
      </View>
    </Pressable>
  );
};

export default Button;`;

  return (
    <div className="container mx-auto py-5 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4">Button</h1>
      <p className="text-lg text-muted-foreground mb-8">
        A versatile button component with various styles and states.
      </p>

      {/* Example showcase */}
      <div className="flex flex-wrap gap-4 p-6 border rounded-lg bg-muted/50 mb-8">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button size="sm">Small</Button>
        <Button size="lg">Large</Button>
        {/* <Button isLoading>Loading</Button>
        <Button leftIcon={<Bell size={16} />}>With Icon</Button> */}
      </div>

      {/* Features section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Multiple visual variants</li>
          <li>Different size options</li>
          <li>Loading state with activity indicator</li>
          <li>Support for icons on either side</li>
          <li>Link functionality with Expo Router</li>
        </ul>
      </div>

      {/* Installation section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>npx shadcn-ui@latest add button</code>
        </pre>
      </div>

      {/* Usage section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>{basicUsageCode}</code>
        </pre>
      </div>

      {/* Examples section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <Tabs defaultValue="variants" className="mb-8">
          <TabsList>
            <TabsTrigger value="variants">Variants</TabsTrigger>
            <TabsTrigger value="sizes">Sizes</TabsTrigger>
            <TabsTrigger value="icons">With Icons</TabsTrigger>
            <TabsTrigger value="loading">Loading</TabsTrigger>
            <TabsTrigger value="links">As Links</TabsTrigger>
          </TabsList>

          <TabsContent value="variants">
            <div className="flex flex-wrap gap-4 p-6 border rounded-lg mb-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{variantsCode}</code>
            </pre>
          </TabsContent>

          <TabsContent value="sizes">
            <div className="flex flex-wrap items-center gap-4 p-6 border rounded-lg mb-4">
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{sizesCode}</code>
            </pre>
          </TabsContent>

          <TabsContent value="icons">
            <div className="flex flex-wrap gap-4 p-6 border rounded-lg mb-4">
              {/* <Button leftIcon={<Bell size={16} />}>Notifications</Button>
              <Button rightIcon={<ArrowRight size={16} />}>Next</Button>
              <Button leftIcon={<Bell size={16} />} rightIcon={<ArrowRight size={16} />}>
                All Notifications
              </Button> */}
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{withIconsCode}</code>
            </pre>
          </TabsContent>

          <TabsContent value="loading">
            <div className="flex flex-wrap gap-4 p-6 border rounded-lg mb-4">
              {/* <Button isLoading>Loading</Button>
              <Button isLoading variant="outline">Loading</Button> */}
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{loadingStateCode}</code>
            </pre>
          </TabsContent>

          <TabsContent value="links">
            <div className="flex flex-wrap gap-4 p-6 border rounded-lg mb-4">
              {/* <Button href="/dashboard">Go to Dashboard</Button> */}
            </div>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto">
              <code>{asLinksCode}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>

      {/* Props section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>children</TableCell>
                <TableCell>React.ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Button content</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>variant</TableCell>
                <TableCell>
                  "default" | "destructive" | "outline" | "secondary" | "ghost"
                  | "link"
                </TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Visual style variant</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>size</TableCell>
                <TableCell>"default" | "sm" | "lg" | "icon"</TableCell>
                <TableCell>"default"</TableCell>
                <TableCell>Button size</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>disabled</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Whether the button is disabled</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>isLoading</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>Shows loading spinner when true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>onPress</TableCell>
                <TableCell>() =`{">"}` void</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Function to call when button is pressed</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>href</TableCell>
                <TableCell>string</TableCell>
                <TableCell>-</TableCell>
                <TableCell>URL to navigate to (uses Expo Router)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>leftIcon</TableCell>
                <TableCell>React.ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Icon to display before button text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>rightIcon</TableCell>
                <TableCell>React.ReactNode</TableCell>
                <TableCell>-</TableCell>
                <TableCell>Icon to display after button text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>className</TableCell>
                <TableCell>string</TableCell>
                <TableCell>""</TableCell>
                <TableCell>
                  Additional CSS classes for the button container
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>textClassName</TableCell>
                <TableCell>string</TableCell>
                <TableCell>""</TableCell>
                <TableCell>
                  Additional CSS classes for the button text
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Implementation section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code>{buttonImplementationCode}</code>
        </pre>
      </div>
    </div>
  );
}
