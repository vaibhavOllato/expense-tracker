// import React from "react";
// import { Wallet, Coins, CircleDollarSign } from "lucide-react";

// const spendingData = {
//   totalBudget: 40000,
//   totalSpent: 28500,
//   categories: [
//     {
//       name: "Rent",
//       planned: 15000,
//       spent: 15000,
//     },
//     {
//       name: "Groceries",
//       planned: 6000,
//       spent: 4800,
//     },
//     {
//       name: "Utilities",
//       planned: 4000,
//       spent: 3800,
//     },
//     {
//       name: "Entertainment",
//       planned: 3000,
//       spent: 2200,
//     },
//     {
//       name: "Transport",
//       planned: 3000,
//       spent: 2700,
//     },
//     {
//       name: "Miscellaneous",
//       planned: 3000,
//       spent: 1000,
//     },
//   ],
// };

// const Spending = () => {
//   const remaining = spendingData.totalBudget - spendingData.totalSpent;

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-bold text-violet-900">Spending Plan</h1>
//         <button className="bg-violet-900 hover:bg-violet-800 text-white px-4 py-2 rounded-md text-sm">
//           Add Planned Expense
//         </button>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 text-center">
//           <p className="text-sm text-violet-900">Total Budget</p>
//           <h2 className="text-xl font-bold text-violet-900">₹{spendingData.totalBudget}</h2>
//         </div>
//         <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
//           <p className="text-sm text-orange-800">Spent</p>
//           <h2 className="text-xl font-bold text-orange-900">₹{spendingData.totalSpent}</h2>
//         </div>
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
//           <p className="text-sm text-green-800">Remaining</p>
//           <h2 className="text-xl font-bold text-green-900">₹{remaining}</h2>
//         </div>
//       </div>

//       {/* Categories Table */}
//       <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
//         <div className="p-4 border-b text-violet-900 font-semibold flex items-center gap-2">
//           <Wallet className="w-5 h-5" />
//           Category-wise Spending
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left">
//             <thead className="bg-violet-100 text-violet-900">
//               <tr>
//                 <th className="px-4 py-2">Category</th>
//                 <th className="px-4 py-2">Planned</th>
//                 <th className="px-4 py-2">Spent</th>
//                 <th className="px-4 py-2">Progress</th>
//               </tr>
//             </thead>
//             <tbody>
//               {spendingData.categories.map((cat, index) => {
//                 const percent = Math.min((cat.spent / cat.planned) * 100, 100).toFixed(0);
//                 return (
//                   <tr key={index} className="border-t hover:bg-violet-50">
//                     <td className="px-4 py-2 font-medium">{cat.name}</td>
//                     <td className="px-4 py-2">₹{cat.planned}</td>
//                     <td className="px-4 py-2">₹{cat.spent}</td>
//                     <td className="px-4 py-2 w-1/3">
//                       <div className="w-full bg-gray-100 rounded-full h-2.5">
//                         <div
//                           className={`h-2.5 rounded-full ${
//                             percent < 80 ? "bg-violet-600" : "bg-red-500"
//                           }`}
//                           style={{ width: `${percent}%` }}
//                         ></div>
//                       </div>
//                       <div className="text-xs text-right text-gray-500 mt-1">{percent}%</div>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Spending;

import React, { useState } from "react";
import { Wallet } from "lucide-react";

// Dummy data for multiple months
const monthlySpendingData = {
  "May 2025": {
    totalBudget: 40000,
    totalSpent: 28500,
    categories: [
      { name: "Rent", planned: 15000, spent: 15000 },
      { name: "Groceries", planned: 6000, spent: 4800 },
      { name: "Utilities", planned: 4000, spent: 3800 },
      { name: "Entertainment", planned: 3000, spent: 2200 },
      { name: "Transport", planned: 3000, spent: 2700 },
      { name: "Miscellaneous", planned: 3000, spent: 1000 },
    ],
  },
  "April 2025": {
    totalBudget: 35000,
    totalSpent: 31000,
    categories: [
      { name: "Rent", planned: 15000, spent: 15000 },
      { name: "Groceries", planned: 5000, spent: 4800 },
      { name: "Utilities", planned: 3500, spent: 3000 },
      { name: "Entertainment", planned: 3000, spent: 2500 },
      { name: "Transport", planned: 3000, spent: 2700 },
      { name: "Miscellaneous", planned: 2500, spent: 1000 },
    ],
  },
};

const Spending = () => {
  const months = Object.keys(monthlySpendingData);
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const data = monthlySpendingData[selectedMonth];
  const remaining = data.totalBudget - data.totalSpent;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-xl font-bold text-violet-900">Spending Plan</h1>
        <div className="flex items-center gap-3">
          <select
            className="border border-violet-300 text-violet-900 text-sm rounded-md px-3 py-2"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <button className="bg-violet-900 hover:bg-violet-800 text-white px-4 py-2 rounded-md text-sm">
            Add Planned Expense
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 text-center">
          <p className="text-sm text-violet-900">Total Budget</p>
          <h2 className="text-xl font-bold text-violet-900">
            ₹{data.totalBudget}
          </h2>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
          <p className="text-sm text-orange-800">Spent</p>
          <h2 className="text-xl font-bold text-orange-900">
            ₹{data.totalSpent}
          </h2>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-sm text-green-800">Remaining</p>
          <h2 className="text-xl font-bold text-green-900">₹{remaining}</h2>
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-4 border-b text-violet-900 font-semibold flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          Category-wise Spending
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-violet-100 text-violet-900">
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Planned</th>
                <th className="px-4 py-2">Spent</th>
                <th className="px-4 py-2">Progress</th>
              </tr>
            </thead>
            <tbody>
              {data.categories.map((cat, index) => {
                const percent = Math.min(
                  (cat.spent / cat.planned) * 100,
                  100
                ).toFixed(0);
                return (
                  <tr key={index} className="border-t hover:bg-violet-50">
                    <td className="px-4 py-2 font-medium">{cat.name}</td>
                    <td className="px-4 py-2">₹{cat.planned}</td>
                    <td className="px-4 py-2">₹{cat.spent}</td>
                    <td className="px-4 py-2 w-1/3">
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${
                            percent < 80 ? "bg-violet-600" : "bg-red-500"
                          }`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-right text-gray-500 mt-1">
                        {percent}%
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Spending;
