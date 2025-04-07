import React from "react";
import { View, Text } from "react-native";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const AccordionExample = () => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        FAQ
      </Text>

      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React Native?</AccordionTrigger>
          <AccordionContent>
            <Text style={{ paddingBottom: 12 }}>
              React Native is a framework that allows you to build mobile apps
              using JavaScript and React. It lets you create native apps for
              Android and iOS using a single codebase.
            </Text>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I install dependencies?</AccordionTrigger>
          <AccordionContent>
            <Text style={{ paddingBottom: 12 }}>
              You can install dependencies in your React Native project using
              npm or yarn. For example: 'npm install package-name' or 'yarn add
              package-name'.
            </Text>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Can I use TypeScript with React Native?
          </AccordionTrigger>
          <AccordionContent>
            <Text style={{ paddingBottom: 12 }}>
              Yes! React Native fully supports TypeScript. You can either start
              a project with TypeScript template or convert an existing
              JavaScript project by renaming files to `.tsx` and setting up a
              `tsconfig.json`.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default AccordionExample;
