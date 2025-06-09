import { Badge } from "@/components/ui/badge";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">natively-ui</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              A comprehensive UI component library for React Native and Expo,
              built with NativeWind for beautiful cross-platform applications.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  CLI Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2024 natively-ui. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant="secondary"
                className="bg-gray-800 text-gray-400 border-gray-700"
              >
                v1.0.0
              </Badge>
              <span className="text-gray-500 text-sm">
                Built with ❤️ for React Native
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
