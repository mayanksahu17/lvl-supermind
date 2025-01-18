// app/dashboard/analytics/page.tsx
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import DashboardLayout from "@/components/dashboardlayout";

const data = [
  { language: 'Hindi', posts: 120 },
  { language: 'Tamil', posts: 98 },
  { language: 'Bengali', posts: 86 },
  { language: 'Telugu', posts: 99 },
  { language: 'Marathi', posts: 85 },
  { language: 'Urdu', posts: 65 },
  { language: 'Gujarati', posts: 74 },
  { language: 'Kannada', posts: 70 },
  { language: 'Odia', posts: 60 },
  { language: 'Punjabi', posts: 69 },
];

export default function AnalyticsPage() {
  const totalPosts = data.reduce((sum, item) => sum + item.posts, 0);
  const averagePosts = (totalPosts / data.length).toFixed(1);
  const mostPopular = data.reduce((prev, current) => 
    prev.posts > current.posts ? prev : current
  );

  return (
    <DashboardLayout>
      <div className="container mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold mb-8 text-blue-300">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gray-800 text-white border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Total Posts by Language</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="language" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '1rem'
                    }}
                    labelStyle={{ color: '#60A5FA' }}
                  />
                  <Legend />
                  <Bar dataKey="posts" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 text-white border-blue-500">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-300">Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-300">Total Posts</h3>
                  <p className="text-3xl font-bold">{totalPosts}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300">Average Posts per Language</h3>
                  <p className="text-3xl font-bold">{averagePosts}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-300">Most Popular Language</h3>
                  <p className="text-3xl font-bold">{`${mostPopular.language} (${mostPopular.posts} posts)`}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}