"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Download, ShoppingBag, TrendingUp, Package } from "lucide-react";

// Sample Data
const salesData = [
  { month: "Jan", sales: 120 },
  { month: "Feb", sales: 200 },
  { month: "Mar", sales: 150 },
  { month: "Apr", sales: 250 },
  { month: "May", sales: 300 },
];

const stockData = [
  { name: "Running", value: 400 },
  { name: "Casual", value: 300 },
  { name: "Sneakers", value: 300 },
  { name: "Formal", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function DashboardPage() {
  const exportData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8,Month,Sales\n" +
      salesData.map((d) => `${d.month},${d.sales}`).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "sales_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="shadow-xl">
          <CardContent className="flex items-center gap-4 p-6">
            <ShoppingBag className="text-blue-500" size={32} />
            <div>
              <p className="text-sm text-gray-500">Total Sales</p>
              <h2 className="text-xl font-bold">12,340</h2>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="flex items-center gap-4 p-6">
            <TrendingUp className="text-green-500" size={32} />
            <div>
              <p className="text-sm text-gray-500">Revenue</p>
              <h2 className="text-xl font-bold">$45,200</h2>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-xl">
          <CardContent className="flex items-center gap-4 p-6">
            <Package className="text-orange-500" size={32} />
            <div>
              <p className="text-sm text-gray-500">Stock Items</p>
              <h2 className="text-xl font-bold">2,560</h2>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Sales Line Graph */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Stock Pie Chart */}
        <Card className="shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Shoe Category Stock</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={stockData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={90}
                  fill="#8884d8"
                  label
                >
                  {stockData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Export System */}
      <div className="flex justify-end">
        <Button onClick={exportData} className="btn btn-primary flex items-center gap-2">
          <Download size={18} /> Export Report
        </Button>
      </div>
    </div>
  );
}
