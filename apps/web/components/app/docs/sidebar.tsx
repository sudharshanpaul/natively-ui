"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarItems from "@/docs-sidebar.json";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[20%] h-[calc(100vh-4rem)] overflow-y-auto flex-shrink-0 border-r sticky top-[9%]">
      <div className="p-6 space-y-6">
        {sidebarItems.map((section) => (
          <div key={section.title} className="space-y-2">
            <h4 className="font-medium text-sm text-gray-500">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block text-sm ${
                      pathname === item.href
                        ? "text-primary font-medium"
                        : "text-gray-600 hover:text-gray-900"
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
