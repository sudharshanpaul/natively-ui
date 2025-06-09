import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { BackgroundLines } from "@/components/ui/background-lines";

export const Hero = () => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-8 text-sm font-medium bg-blue-900/50 text-blue-200 border-blue-800"
          >
            🚀 natively-ui
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Beautiful{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              React Native
            </span>{" "}
            Apps
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A comprehensive UI component library for React Native and Expo,
            built with NativeWind. Get started in seconds with our CLI and build
            stunning cross-platform apps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href={"/docs/getting-started"}>
              <Button
                size="lg"
                className="text-lg text-white px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link
              target="_blank"
              href={"https://github.com/Ayushhgupta39/natively-ui"}
            >
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-gray-600 text-gray-200 hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" /> View on GitHub
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
    </BackgroundLines>
  );
};
