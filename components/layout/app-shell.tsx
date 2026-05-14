import { ReactNode } from "react";
import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";
export function AppShell({ children }: { children: ReactNode }) { return <div className="flex min-h-screen"><Sidebar /><main className="flex-1"><Topbar /><div className="p-6">{children}</div></main></div>; }
