"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <section className="relative flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-4 text-sm font-playfair italic font-medium bg-zinc-900 text-blue-200"
            >
              natively-ui
            </Badge>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Build Beautiful{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                React Native
              </span>{" "}
              Apps
            </h1>

            <p className="text-xl font-playfair italic font-thin sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive UI component library for React Native and Expo,
              built with NativeWind. Get started in seconds with our CLI and
              build stunning cross-platform apps.
            </p>

            <div className="flex flex-col sm:flex-row font-geist gap-4 justify-center items-center mb-12">
              <Link href={"/docs/getting-started"}>
                <Button
                  size={"lg"}
                  className="font-geist text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200"
                >
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>

              <Link
                target="_blank"
                href={"https://github.com/Ayushhgupta39/natively-ui"}
              >
                <Button
                  size={"lg"}
                  className="font-geist text-white bg-black hover:bg-zinc-900 hover:scale-105 transition-all duration-200"
                >
                  <Github className="h-5 w-5" /> View on GitHub
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                Expo Compatible
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                NativeWind Powered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                TypeScript First
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full" />
                CLI Included
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
};
