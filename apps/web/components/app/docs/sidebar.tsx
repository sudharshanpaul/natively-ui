"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import sidebarItems from "@/docs-sidebar.json";

export function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const SidebarContent = () => (
    <div className="p-8 space-y-6 h-full">
      {sidebarItems.map((section) => (
        <div key={section.title} className="space-y-2">
          <h4 className="font-medium text-lg text-white">{section.title}</h4>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-sm mb-4 ${
                    pathname === item.href
                      ? "font-medium"
                      : "text-gray-400 hover:text-gray-500"
                  }`}
                  onClick={() => setOpen(false)} // Close mobile menu on link click
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-20 left-4 z-40">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-background">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] p-0 overflow-y-auto">
            <SheetTitle></SheetTitle>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[20%] h-[calc(100vh-4rem)] px-6 overflow-y-auto flex-shrink-0 border-r sticky top-[9%]">
        <div className="border-x h-full">
          <SidebarContent />
        </div>
      </div>
    </>
  );
}
