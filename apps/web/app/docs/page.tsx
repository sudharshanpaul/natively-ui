"use client";

import Link from "next/link";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { useState } from "react";
import { IconCheck, IconCopy } from "@tabler/icons-react";

export default function DocsPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const textToCopy = "npx natively-ui init";
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div className="min-h-screen text-neutral-50">
      <div className=" mx-auto p-4">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Beautiful React Native
            <br className="hidden sm:inline" />
            components
          </h1>
          <p className="max-w-[700px] text-lg text-neutral-400 sm:text-xl">
            Beautifully designed components that you can copy and paste into
            your apps. Accessible. Customizable. Open Source.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 bg-neutral-50 text-neutral-900 shadow hover:bg-neutral-50/90 h-10 px-4 py-2"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/components"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 border border-neutral-800 bg-transparent shadow-sm hover:bg-neutral-800 h-10 px-4 py-2"
            >
              Browse Components
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          {/* Features Grid */}
          <section className="py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Features
              </h2>
              <p className="max-w-[85%] leading-normal text-neutral-400 sm:text-lg sm:leading-7">
                The component library for React Native that prioritizes
                developer experience
              </p>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
              <div className="relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-6 hover:bg-neutral-800/50 transition-colors">
                <div className="flex h-[180px] flex-col justify-between rounded-md">
                  <Shield className="h-12 w-12 text-neutral-400" />
                  <div className="space-y-2">
                    <h3 className="font-bold">Accessible</h3>
                    <p className="text-sm text-neutral-400">
                      Built with accessibility in mind. WAI-ARIA compliant and
                      keyboard navigable.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-6 hover:bg-neutral-800/50 transition-colors">
                <div className="flex h-[180px] flex-col justify-between rounded-md">
                  <Zap className="h-12 w-12 text-neutral-400" />
                  <div className="space-y-2">
                    <h3 className="font-bold">Customizable</h3>
                    <p className="text-sm text-neutral-400">
                      Flexible theming system that works with your existing
                      design tokens.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-6 hover:bg-neutral-800/50 transition-colors">
                <div className="flex h-[180px] flex-col justify-between rounded-md">
                  <Code className="h-12 w-12 text-neutral-400" />
                  <div className="space-y-2">
                    <h3 className="font-bold">Developer Experience</h3>
                    <p className="text-sm text-neutral-400">
                      Simple installation, comprehensive docs, and TypeScript
                      support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Components Showcase */}
          <section className="py-8 md:py-12">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Components
              </h2>
              <p className="max-w-[85%] leading-normal text-neutral-400 sm:text-lg sm:leading-7">
                A growing collection of production-ready components
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  name: "Datepicker",
                  description:
                    "A flexible date picker with customizable calendar views and date range selection.",
                  package: "@/components/ui/datepicker",
                },
                {
                  name: "Drawer",
                  description:
                    "A sliding drawer component with gesture support and customizable positions.",
                  package: "@/components/ui/drawer",
                },
                {
                  name: "Dialog",
                  description:
                    "Modal dialogs with animations, backdrop handling, and accessibility features.",
                  package: "@/components/ui/dialog",
                },
                {
                  name: "Combobox",
                  description:
                    "An autocomplete input with filtering, keyboard navigation, and custom rendering.",
                  package: "@/components/ui/combobox",
                },
                {
                  name: "Accordion",
                  description:
                    "Expandable content sections with smooth animations and keyboard support.",
                  package: "@/components/ui/accordion",
                },
                {
                  name: "Alert Dialog",
                  description:
                    "Accessible alert dialogs for important user confirmations and notifications.",
                  package: "@/components/ui/alert-dialog",
                },
              ].map((component, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden cursor-pointer rounded-lg border border-neutral-800 bg-neutral-900 p-6 hover:bg-neutral-800/50 transition-all hover:border-neutral-700"
                >
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-neutral-50 group-hover:text-white transition-colors">
                      {component.name}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {component.description}
                    </p>
                    <div className="flex items-center justify-between pt-2">
                      <code className="relative rounded bg-neutral-800 px-2 py-1 text-xs text-neutral-300">
                        {component.package}
                      </code>
                      <ArrowRight className="h-4 w-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Start */}
          <section className="py-8 md:py-12 lg:py-24">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                Quick Start
              </h2>
              <p className="max-w-[85%] leading-normal text-neutral-400 sm:text-lg sm:leading-7">
                Get up and running in minutes
              </p>
            </div>
            <div className="mt-2 flex justify-center items-center">
              <div className="font-fira cursor-pointer bg-zinc-900 hover:text-white text-neutral-400 transition-colors text-center text-sm rounded-lg px-3 p-2">
                <code
                  onClick={copyToClipboard}
                  className="flex items-center gap-2"
                >
                  ~ npx natively-ui init{" "}
                  <button className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                    {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                  </button>
                </code>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-neutral-400 md:text-left">
              Built by Ayush Gupta. The source code is available on{" "}
              <Link
                href="https://github.com/Ayushhgupta39/natively-ui"
                className="font-medium underline underline-offset-4"
                target="_blank"
              >
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
