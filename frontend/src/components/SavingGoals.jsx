import React from "react";
import { Umbrella, ShieldCheck } from "lucide-react";

const SavingGoals = () => {
  const goals = [
    {
      name: "Vacation",
      saved: 400,
      target: 1000,
      icon: <Umbrella className="w-4 h-4 text-violet-900" />,
    },
    {
      name: "Emergency Fund",
      saved: 800,
      target: 1500,
      icon: <ShieldCheck className="w-4 h-4 text-violet-900" />,
    },
    {
      name: "Travel",
      saved: 500,
      target: 2000,
      icon: <ShieldCheck className="w-4 h-4 text-violet-900" />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 text-gray-800">
      <h2 className="text-base font-bold mb-3 text-violet-900 tracking-wide">
        Saving Goals
      </h2>

      <div className="space-y-4">
        {goals.map(({ name, saved, target, icon }) => {
          const percent = (saved / target) * 100;
          return (
            <div
              key={name}
              className="bg-violet-50 rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2 font-medium text-violet-900 text-sm">
                  {icon}
                  <span>{name}</span>
                </div>
                <span className="text-sm font-semibold text-violet-900">
                  ₹{saved}
                </span>
              </div>

              <div className="w-full h-2 bg-violet-50 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-violet-900 to-purple-600 transition-all duration-700 ease-in-out"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>

              <p className="text-xs text-violet-600 mt-1">
                {percent.toFixed(0)}% saved of ₹{target}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavingGoals;
