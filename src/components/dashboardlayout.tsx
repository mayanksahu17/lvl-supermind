'use client';

import { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-900 p-8">
        {children}
      </main>
    </div>
  );
}