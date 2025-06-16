import { Badge } from "@/components/ui/badge";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          {/* Left Section - Logo and Description */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Natively UI.</span>
            </div>
            <p className="text-gray-400 font-geist mb-4 leading-relaxed">
              A comprehensive UI component library for React Native and Expo,
              built with NativeWind for beautiful cross-platform applications.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/Ayushhgupta39/natively-ui"
                target="_blank"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/Ayushh_gif"
                target="_blank"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Section - About Me Links */}
          <div className="md:mr-10">
            <h3 className="font-semibold mb-4 text-white">About Me</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="https://github.com/Ayushhgupta39"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/ayush-gupta-b0a06a237/"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/Ayushh_gif"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://ayush-gupta-portfolio.vercel.app/"
                  className="hover:text-white transition-colors"
                  target="_blank"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 natively-ui. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Badge
                variant="secondary"
                className="bg-gray-800 text-gray-400 border-gray-700"
              >
                v1.0.8
              </Badge>
              <span className="text-gray-500 text-sm text-center sm:text-right">
                Built with ❤️ By Ayush Gupta for React Native
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
