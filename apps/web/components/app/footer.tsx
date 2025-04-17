import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t font-poppins bg-background">
      <div className="px-4 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-5 w-5 rounded-full bg-primary"></span>
            <span className="font-bold">natively-ui</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} natively-ui. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
        <Link
            href="https://twitter.com/natively_ui"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com/natively-ui/natively-ui"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          
        </div>
      </div>
    </footer>
  );
}
