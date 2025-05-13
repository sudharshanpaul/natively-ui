import React from "react";
import { Text, View } from "react-native";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <View className="flex-1 items-center justify-center p-6">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <View className="px-4 py-2 rounded-md bg-zinc-900 dark:bg-zinc-50">
            <Text className="text-white dark:text-zinc-900 font-medium">
              Open Menu
            </Text>
          </View>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onPress={() => console.log("Profile")}>
              <Text className="text-zinc-800 dark:text-zinc-200">Profile</Text>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => console.log("Billing")}>
              <Text className="text-zinc-800 dark:text-zinc-200">Billing</Text>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => console.log("Settings")}>
              <Text className="text-zinc-800 dark:text-zinc-200">Settings</Text>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onPress={() => console.log("Team")}>
              <Text className="text-zinc-800 dark:text-zinc-200">Team</Text>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Text className="text-zinc-800 dark:text-zinc-200">
                  Invite Users
                </Text>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem onPress={() => console.log("Email")}>
                    <Text className="text-zinc-800 dark:text-zinc-200">
                      Email
                    </Text>
                  </DropdownMenuItem>
                  <DropdownMenuItem onPress={() => console.log("Message")}>
                    <Text className="text-zinc-800 dark:text-zinc-200">
                      Message
                    </Text>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onPress={() => console.log("More")}>
                    <Text className="text-zinc-800 dark:text-zinc-200">
                      More...
                    </Text>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem onPress={() => console.log("New Team")}>
              <Text className="text-zinc-800 dark:text-zinc-200">New Team</Text>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onPress={() => console.log("GitHub")}>
            <Text className="text-zinc-800 dark:text-zinc-200">GitHub</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onPress={() => console.log("Support")}>
            <Text className="text-zinc-800 dark:text-zinc-200">Support</Text>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Text className="text-zinc-800 dark:text-zinc-200">API</Text>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onPress={() => console.log("Log out")}>
            <Text className="text-zinc-800 dark:text-zinc-200">Log out</Text>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </View>
  );
}
