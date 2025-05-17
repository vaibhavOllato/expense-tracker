import React, { useState } from "react";
import { Circle } from "rc-progress";

const sampleData = {
  today: {
    totalSpent: 320,
    goal: 1000,
    categories: [
      { label: "Food", amount: 120, total: 300 },
      { label: "Transport", amount: 80, total: 150 },
      //   { label: "Entertainment", amount: 120, total: 200 },
    ],
  },
  month: {
    totalSpent: 4200,
    goal: 10000,
    categories: [
      { label: "Rent", amount: 2000, total: 2500 },
      { label: "Food", amount: 1000, total: 1500 },
      //   { label: "Utilities", amount: 1200, total: 1300 },
    ],
  },
  year: {
    totalSpent: 50000,
    goal: 120000,
    categories: [
      { label: "Mortgage", amount: 20000, total: 30000 },
      { label: "Travel", amount: 15000, total: 20000 },
      //   { label: "Health", amount: 15000, total: 18000 },
    ],
  },
};

const TopSpendingCategories = () => {
  const [period, setPeriod] = useState("month");
  const data = sampleData[period];
  const percent = (data.totalSpent / data.goal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-4xl mx-auto text-gray-800 font-sans">
      {/* Top Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
        </select>
      </div>

      {/* Middle Section: Circular Graph Left, Summary Right */}
      <div className="flex gap-6 mb-3 items-center">
        {/* Circular Progress */}
        <div className="relative w-32 h-32">
          <Circle
            percent={percent}
            strokeWidth={10}
            strokeColor="url(#grad1)"
            trailColor="#e0f2fe"
            strokeLinecap="round"
          />
          <svg className="absolute top-0 left-0 w-full h-full">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8F00FF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-violet-900">
              {percent.toFixed(0)}%
            </span>
            <span className="text-xs font-medium text-violet-900">of goal</span>
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col justify-center items-center bg-violet-50 rounded-lg p-4 w-40">
          <p className="text-sm text-violet-900 font-semibold mb-1 uppercase">
            Total Spent
          </p>
          <p className="text-2xl font-bold text-violet-900">
            ₹{data.totalSpent}
          </p>
          <p className="text-xs text-violet-600 mt-1">Goal: ₹{data.goal}</p>
        </div>
      </div>

      {/* Bottom Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {data.categories.map(({ label, amount, total }) => {
          const percent = (amount / total) * 100;
          return (
            <div
              key={label}
              className="bg-violet-50 rounded-md p-2 shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <div className="flex justify-between font-semibold text-violet-900 mb-1 text-sm">
                <span>{label}</span>
                <span>₹{amount}</span>
              </div>
              <div className="w-full h-2 bg-violet-100 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-violet-900 to-violet-600 transition-all duration-700 ease-out"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopSpendingCategories;
