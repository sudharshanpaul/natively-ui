"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarItems from "@/docs-sidebar.json";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 pr-8 flex-shrink-0">
      <div className="sticky top-16 space-y-6">
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
