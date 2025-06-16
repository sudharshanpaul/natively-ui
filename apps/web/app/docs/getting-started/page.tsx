"use client";

import { Check, Terminal, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/app/code-block";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";

const Page = () => {
  const Code = ({
    children,
    language = "bash",
    className,
  }: {
    children: string;
    language?: string;
    className?: string;
  }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
      const textToCopy = children;
      if (textToCopy) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };

    return (
      <div className="relative">
        <div className="w-full flex items-center justify-between bg-[#171717] rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm font-fira text-neutral-400 whitespace-pre-wrap">
            <code>{children}</code>
          </pre>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors ml-4 flex-shrink-0"
          >
            {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
          </button>
        </div>
      </div>
    );
  };

  const Step = ({
    number,
    title,
    children,
  }: {
    number: number;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="ml-11">{children}</div>
    </div>
  );

  const prerequisites = [
    "React Native development environment",
    "Node.js 16.0 or later",
    "npm or similar package manager",
    "An existing Expo project",
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-12 px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Getting Started
          </h1>
          <p className="text-xl text-muted-foreground">
            Set up Nativewind and Natively in your React Native project
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Terminal className="h-6 w-6" />
              What is this guide for?
            </h2>
            <p className="text-muted-foreground mb-6">
              This guide will help you set up Nativewind (Tailwind CSS for React
              Native) and the natively CLI tool. Nativewind allows you to use
              Tailwind CSS classes in your React Native projects, while natively
              provides a collection of pre-built, customizable components that
              work seamlessly with Nativewind.
            </p>

            <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
            <ul className="space-y-2">
              {prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">{prereq}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Part 1: Nativewind Setup */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">
              Part 1: Setting Up Nativewind
            </h2>
          </div>

          <Step number={1} title="Install Nativewind">
            <Code>
              {`npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install -D tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11`}
            </Code>
          </Step>

          <Step number={2} title="Initialize Tailwind CSS">
            <p className="text-sm text-muted-foreground mb-3">
              Run{" "}
              <span className="p-1 px-2 bg-neutral-800 rounded-md">
                npx tailwindcss
              </span>{" "}
              init to create a{" "}
              <span className="p-1 px-2 bg-neutral-800 rounded-md">
                tailwind.config.js
              </span>{" "}
              file
            </p>
            <Code>npx tailwindcss init</Code>
          </Step>

          <Step number={3} title="Configure Tailwind">
            <p className="text-sm text-muted-foreground mb-3">
              Add the paths to all of your component files in your
              tailwind.config.js file.
            </p>

            <CodeBlock
              language="jsx"
              filename="tailwind.config.js"
              code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
`}
            />
          </Step>

          <Step number={4} title="Configure your metro.config.js">
            <p className="text-sm text-muted-foreground mb-3">
              Create a{" "}
              <span className="p-1 px-2 bg-neutral-800 rounded-md">
                metro.config.js
              </span>{" "}
              file in the root of your project if you don't already have one,
              then add the following configuration:
            </p>
            <CodeBlock
              language="javascript"
              filename="metro.config.js"
              code={`const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })`}
            />
          </Step>

          <Step number={5} title="Create the CSS File">
            <p className="text-sm text-muted-foreground mb-3">
              Create a CSS file and add the Tailwind directives.
            </p>
            <CodeBlock
              language="css"
              filename=""
              code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
            />
          </Step>

          <Step number={6} title="Add the Babel preset">
            <CodeBlock
              language="javascript"
              filename="babel.config.js"
              code={`module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};`}
            />
          </Step>

          <Step number={7} title="Import Global CSS">
            <p className="text-sm text-muted-foreground mb-3">
              Add this import to your App.js or main entry file:
            </p>
            <CodeBlock
              language="javascript"
              code={`import "./global.css"
 
export default App() {
  /* Your App */
}`}
              filename="App.tsx"
            />
          </Step>

          <Step number={8} title="Configure TypeScript (if using TypeScript)">
            <p className="text-sm text-muted-foreground mb-3">
              Create or update Nativewind-env.d.ts:
            </p>
            <Code language="typescript">
              /// &lt;reference types="Nativewind/types" /&gt;
            </Code>
            <p className="mt-4">
              For more information, Please follow the{" "}
              <Link
                href={
                  "https://www.nativewind.dev/docs/getting-started/typescript"
                }
                className="font-medium underline underline-offset-2"
                target="_blank"
              >
                Typescript Guide
              </Link>
            </p>
          </Step>
        </section>

        {/* Part 2: natively CLI Setup */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">Part 2: Setting Up Natively</h2>
          </div>
          <Step number={1} title="Initialize natively in Your Project">
            <Code>npx natively-ui init</Code>
            <p className="text-sm text-muted-foreground mt-3">
              That's it! This will create the necessary configuration files and
              folder structure for natively components.
            </p>
          </Step>
        </section>

        {/* Using natively Section */}
        <section className="mb-12">
          <Step number={2} title="Using Natively">
            <div>
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Install Components</h3>
                <Code>npx natively-ui add [component-name]</Code>
                <p className="text-sm text-muted-foreground mt-2">Example:</p>
                <div className="space-y-2 mt-2">
                  <Code>npx natively-ui add button</Code>
                  <Code>npx natively-ui add card</Code>
                  <Code>npx natively-ui add avatar</Code>
                </div>
              </Card>
            </div>
          </Step>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ArrowRight className="h-6 w-6" />
              Next Steps
            </h2>
            <p className="text-muted-foreground mb-6">
              Now that you have both Nativewind and natively set up:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="outline">1</Badge>
                <div>
                  <h4 className="font-medium">Browse Components</h4>
                  <p className="text-sm text-muted-foreground">
                    Use{" "}
                    <code className="bg-muted px-1 py-0.5 rounded">
                      npx natively-ui add --all
                    </code>{" "}
                    to add all available components
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="outline">2</Badge>
                <div>
                  <h4 className="font-medium">Install Your First Component</h4>
                  <p className="text-sm text-muted-foreground">
                    Try installing a Button or Card component
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="outline">3</Badge>
                <div>
                  <h4 className="font-medium">Start Building</h4>
                  <p className="text-sm text-muted-foreground">
                    Begin using Tailwind classes and natively components in your
                    app
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Badge variant="outline">4</Badge>
                <div>
                  <h4 className="font-medium">Customize</h4>
                  <p className="text-sm text-muted-foreground">
                    Modify the installed components to match your design system
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary">
                🎉 You're ready to start building beautiful React Native apps
                with Natively!
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Page;
