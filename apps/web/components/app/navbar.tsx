"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur-2xl">
      <div className="flex h-16 p-6 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Natively UI.</span>
            </div>
          </Link>
          <nav className="hidden md:flex md:gap-6">
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="/docs/components/button"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Components
            </Link>
            {/* <Link
              href="/examples"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Examples
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link> */}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="https://github.com/Ayushhgupta39/natively-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
