import React from "react";
import { Circle } from "rc-progress";

const SpendingPlan = () => {
  const totalPlanned = 1000;
  const used = 620;
  const available = totalPlanned - used;
  const dailyAvg = (used / 30).toFixed(0);

  let availableColor = "text-green-600 bg-green-100";
  if (available < 200) availableColor = "text-red-600 bg-red-100";
  else if (available < 500) availableColor = "text-yellow-600 bg-yellow-100";

  const categories = [
    { label: "Phone", used: 200, total: 800 },
    { label: "Rent", used: 600, total: 800 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-2 max-w-3xl mx-auto text-gray-800 font-sans">
      <h2 className="text-base font-extrabold mb-2 text-violet-900 tracking-wide">
        Spending Plan – May 2025
      </h2>

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Circular Progress */}
        <div className="relative w-24 h-24">
          <Circle
            percent={(used / totalPlanned) * 100}
            strokeWidth={8}
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
            <span className="text-xl font-bold text-violet-900">
              {((used / totalPlanned) * 100).toFixed(0)}%
            </span>
            <span className="text-xs font-medium text-violet-900">Used</span>
          </div>
        </div>

        {/* Summary */}
        <div className="flex-1 grid grid-cols-2 gap-2 text-xs font-semibold">
          <div className="bg-violet-50 rounded-lg p-1 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <p className="text-violet-900 uppercase mb-0.5">Per Day Used</p>
            <p className="text-sm text-violet-900">₹{dailyAvg}</p>
          </div>
          <div
            className={`rounded-lg p-1 shadow-sm hover:shadow-md transition-shadow cursor-default ${availableColor} inline-block`}
          >
            <p className="uppercase mb-0.5 font-semibold">Available</p>
            <p className="text-sm font-bold">{`₹${available}`}</p>
          </div>
          <div className="bg-violet-50 rounded-lg p-1 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <p className="text-violet-900 uppercase mb-0.5">Planned Spending</p>
            <p className="text-sm text-violet-900">₹{totalPlanned}</p>
          </div>
          <div className="bg-violet-50 rounded-lg p-1 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <p className="text-violet-900 uppercase mb-0.5">Other Spending</p>
            <p className="text-sm text-violet-900">₹{used}</p>
          </div>
        </div>
      </div>

      {/* Bottom Spending Categories */}
      <div className="mt-3">
        {/* <h3 className="font-semibold mb-2 text-cyan-800 tracking-wide text-sm">
          Planned Spending Breakdown
        </h3> */}
        <div className="space-y-2">
          {categories.map(({ label, used, total }) => {
            const percent = (used / total) * 100;
            return (
              <div
                key={label}
                className="group cursor-pointer hover:bg-violet-50 rounded-lg p-1.5 transition-colors"
              >
                <div className="flex justify-between mb-1 font-semibold text-violet-900 text-sm">
                  <span>{label}</span>
                  <span>{`₹${used} / ₹${total}`}</span>
                </div>
                <div className="w-full h-2 bg-cyan-100 rounded-full overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-violet-900 to-violet-900 transition-all duration-700 ease-out group-hover:from-violet-600 group-hover:to-violet-500"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpendingPlan;
