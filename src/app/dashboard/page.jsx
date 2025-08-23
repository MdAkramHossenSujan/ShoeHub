"use client"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Page() {
  // Dummy data for graph
  const data = [
    { name: "Jan", sales: 400, stock: 240 },
    { name: "Feb", sales: 300, stock: 200 },
    { name: "Mar", sales: 200, stock: 278 },
    { name: "Apr", sales: 278, stock: 189 },
    { name: "May", sales: 189, stock: 239 },
    { name: "Jun", sales: 239, stock: 349 },
  ];

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="p-6 w-full max-w-6xl space-y-6">
        {/* Dashboard Title */}
        <h1 className="text-2xl font-bold">Dashboard Home</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Total Shoes</h2>
            <p className="text-3xl font-bold mt-2">1,245</p>
          </div>
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Exports</h2>
            <p className="text-3xl font-bold mt-2">534</p>
          </div>
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-3xl font-bold mt-2">$32,400</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">
            Monthly Sales vs Stock
          </h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#2563eb" />
                <Bar dataKey="stock" fill="#16a34a" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Extra Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              <li>50 new shoes added to stock</li>
              <li>20 shoes exported to UK</li>
              <li>5 pending orders</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl shadow-md ">
            <h2 className="text-lg font-semibold">Export System</h2>
            <p className="text-sm mt-2">
              Our export system currently supports{" "}
              <strong>12 countries</strong>. Most recent shipments include{" "}
              <strong>Germany</strong>, <strong>Canada</strong>, and{" "}
              <strong>Japan</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

