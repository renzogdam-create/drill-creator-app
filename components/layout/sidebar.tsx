"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNav } from "@/lib/constants/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r bg-white p-4">
      <h1 className="mb-4 text-xl font-bold">TrainerPro Academy</h1>
      <nav className="space-y-2">
        {dashboardNav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded px-3 py-2 text-sm ${active ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
