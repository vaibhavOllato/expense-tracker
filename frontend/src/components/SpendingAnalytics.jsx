import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const sampleData = {
  today: [{ month: "Today", amount: 250 }],
  month: [
    { month: "Week 1", amount: 1500 },
    { month: "Week 2", amount: 1200 },
    { month: "Week 3", amount: 1800 },
    { month: "Week 4", amount: 2200 },
  ],
  year: [
    { month: "Jan", amount: 3000 },
    { month: "Feb", amount: 2800 },
    { month: "Mar", amount: 3200 },
    { month: "Apr", amount: 2700 },
    { month: "May", amount: 3500 },
  ],
};

const SpendingAnalytics = () => {
  const [filter, setFilter] = useState("month");

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-bold text-violet-900 tracking-wide">
          Spending Analytics
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-sm text-violet-700 bg-violet-50 border border-violet-100 rounded-md px-2 py-1 focus:outline-none"
        >
          <option value="today">Today</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData[filter]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0f2fe" />
            <XAxis dataKey="month" stroke="#8b5cf6" />
            <YAxis stroke="#8b5cf6" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8b5cf6"
              strokeWidth={3}
              dot={{ r: 5, stroke: "#6d28d9", strokeWidth: 2 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingAnalytics;
