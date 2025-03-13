"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarItems from "@/docs-sidebar.json";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[20%] h-[calc(100vh-4rem)] px-6 overflow-y-auto flex-shrink-0 border-r sticky top-[9%]">
      <div className="p-8 space-y-6 border-x h-full">
        {sidebarItems.map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="font-medium text-gray-200">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block text-sm ${
                      pathname === item.href
                        ? "font-medium"
                        : "text-gray-400 hover:text-gray-500"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
