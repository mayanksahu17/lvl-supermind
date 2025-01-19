'use client';

import { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [postCount, setPostCount] = useState<number | null>(null);

  useEffect(() => {
    // Simulating an API call to fetch post count
    const fetchPostCount = async () => {
      try {
        // Here you should fetch from your actual API endpoint
        const response = await fetch('/api/posts/count');
        const data = await response.json();
        setPostCount(data.count); // Assuming the response has { count: number }
      } catch (error) {
        console.error("Error fetching post count:", error);
        setPostCount(0); // Default to 0 if there's an error
      }
    };

    fetchPostCount();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-900 p-8">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg">
            <strong>Total Posts: </strong>
            {postCount !== null ? postCount : 'Loading...'}
          </div>
          <div className="text-lg">
            <strong>Average Time: </strong>
            6 sec
          </div>
        </div>

        {children}
      </main>
    </div>
  );
}
