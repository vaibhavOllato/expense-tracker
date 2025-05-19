// import React from "react";
// import { TrendingUp, TrendingDown, LineChart, FileBarChart2 } from "lucide-react";

// const investmentData = {
//   totalInvested: 50000,
//   currentValue: 61000,
//   profitLoss: 11000,
//   profitPercent: 22,
//   portfolio: [
//     {
//       name: "HDFC Equity Fund",
//       type: "Mutual Fund",
//       invested: 15000,
//       current: 18000,
//       status: "Profit",
//     },
//     {
//       name: "Tata Digital India",
//       type: "Mutual Fund",
//       invested: 20000,
//       current: 18500,
//       status: "Loss",
//     },
//     {
//       name: "SBI Bluechip Fund",
//       type: "Mutual Fund",
//       invested: 15000,
//       current: 24500,
//       status: "Profit",
//     },
//   ],
// };

// const Investment = () => {
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-xl font-bold text-cyan-800">Investments</h1>
//         <button className="bg-cyan-800 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
//           <FileBarChart2 className="w-4 h-4" /> Generate Report
//         </button>
//       </div>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//         <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 text-center">
//           <p className="text-sm text-cyan-800">Total Invested</p>
//           <h2 className="text-xl font-bold text-cyan-900">₹{investmentData.totalInvested}</h2>
//         </div>
//         <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
//           <p className="text-sm text-green-800">Current Value</p>
//           <h2 className="text-xl font-bold text-green-900">₹{investmentData.currentValue}</h2>
//         </div>
//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
//           <p className="text-sm text-blue-800">Profit / Loss</p>
//           <h2 className="text-xl font-bold text-blue-900">
//             ₹{investmentData.profitLoss} ({investmentData.profitPercent}%)
//           </h2>
//         </div>
//       </div>

//       {/* Chart Section */}
//       <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
//         <div className="flex justify-between items-center mb-2">
//           <h3 className="font-semibold text-cyan-900 flex items-center gap-2">
//             <LineChart className="w-4 h-4" /> Portfolio Growth (Chart)
//           </h3>
//           <span className="text-sm text-gray-400">*Graph Placeholder</span>
//         </div>
//         <div className="h-40 bg-gradient-to-r from-cyan-100 to-cyan-50 flex items-center justify-center rounded-md text-cyan-500 text-sm italic">
//           Graph would appear here...
//         </div>
//       </div>

//       {/* Investment Table */}
//       <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
//         <table className="w-full text-sm text-left">
//           <thead className="bg-cyan-100 text-cyan-900">
//             <tr>
//               <th className="px-4 py-2">Fund Name</th>
//               <th className="px-4 py-2">Type</th>
//               <th className="px-4 py-2">Invested</th>
//               <th className="px-4 py-2">Current</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {investmentData.portfolio.map((item, index) => (
//               <tr key={index} className="border-t hover:bg-cyan-50">
//                 <td className="px-4 py-2 font-medium">{item.name}</td>
//                 <td className="px-4 py-2">{item.type}</td>
//                 <td className="px-4 py-2">₹{item.invested}</td>
//                 <td className="px-4 py-2">₹{item.current}</td>
//                 <td className="px-4 py-2">
//                   <span
//                     className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
//                       item.status === "Profit"
//                         ? "bg-green-100 text-green-800"
//                         : "bg-red-100 text-red-800"
//                     }`}
//                   >
//                     {item.status === "Profit" ? (
//                       <TrendingUp className="w-3 h-3" />
//                     ) : (
//                       <TrendingDown className="w-3 h-3" />
//                     )}
//                     {item.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//             {investmentData.portfolio.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center py-4 text-gray-400">
//                   No investment data available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Investment;



import React from "react";
import {
  TrendingUp,
  TrendingDown,
  LineChart,
  FileBarChart2,
  Banknote,
} from "lucide-react";

const investmentData = {
  totalInvested: 50000,
  currentValue: 61000,
  profitLoss: 11000,
  profitPercent: 22,
  portfolio: [
    {
      name: "HDFC Equity Fund",
      type: "Mutual Fund",
      invested: 15000,
      current: 18000,
      status: "Profit",
    },
    {
      name: "Tata Digital India",
      type: "Mutual Fund",
      invested: 20000,
      current: 18500,
      status: "Loss",
    },
    {
      name: "SBI Bluechip Fund",
      type: "Mutual Fund",
      invested: 15000,
      current: 24500,
      status: "Profit",
    },
  ],
  fds: [
    {
      bank: "HDFC Bank",
      amount: 10000,
      interestRate: 6.5,
      duration: "1 Year",
      maturityAmount: 10650,
    },
    {
      bank: "SBI Bank",
      amount: 20000,
      interestRate: 7.0,
      duration: "2 Years",
      maturityAmount: 22800,
    },
  ],
};

const Investment = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-violet-900">Investments</h1>
        <button className="bg-violet-900 hover:bg-violet-800 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <FileBarChart2 className="w-4 h-4" /> Generate Report
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-violet-50 border border-violet-200 rounded-lg p-4 text-center">
          <p className="text-sm text-violet-900">Total Invested</p>
          <h2 className="text-xl font-bold text-violet-900">₹{investmentData.totalInvested}</h2>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <p className="text-sm text-green-800">Current Value</p>
          <h2 className="text-xl font-bold text-green-900">₹{investmentData.currentValue}</h2>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <p className="text-sm text-blue-800">Profit / Loss</p>
          <h2 className="text-xl font-bold text-blue-900">
            ₹{investmentData.profitLoss} ({investmentData.profitPercent}%)
          </h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-violet-900 flex items-center gap-2">
            <LineChart className="w-4 h-4" /> Portfolio Growth (Chart)
          </h3>
          <span className="text-sm text-gray-400">*Graph Placeholder</span>
        </div>
        <div className="h-40 bg-gradient-to-r from-violet-100 to-violet-50 flex items-center justify-center rounded-md text-violet-500 text-sm italic">
          Graph would appear here...
        </div>
      </div>

      {/* Mutual Funds Table */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-violet-100 text-violet-900">
            <tr>
              <th className="px-4 py-2">Fund Name</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Invested</th>
              <th className="px-4 py-2">Current</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {investmentData.portfolio.map((item, index) => (
              <tr key={index} className="border-t hover:bg-violet-50">
                <td className="px-4 py-2 font-medium">{item.name}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">₹{item.invested}</td>
                <td className="px-4 py-2">₹{item.current}</td>
                <td className="px-4 py-2">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                      item.status === "Profit"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status === "Profit" ? (
                      <TrendingUp className="w-3 h-3" />
                    ) : (
                      <TrendingDown className="w-3 h-3" />
                    )}
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fixed Deposits Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-4 border-b flex items-center gap-2 text-violet-900 font-semibold">
          <Banknote className="w-5 h-5" />
          Fixed Deposits (FD)
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-violet-100 text-violet-900">
              <tr>
                <th className="px-4 py-2">Bank</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Interest Rate</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Maturity</th>
              </tr>
            </thead>
            <tbody>
              {investmentData.fds.map((fd, index) => (
                <tr key={index} className="border-t hover:bg-violet-50">
                  <td className="px-4 py-2 font-medium">{fd.bank}</td>
                  <td className="px-4 py-2">₹{fd.amount}</td>
                  <td className="px-4 py-2">{fd.interestRate}%</td>
                  <td className="px-4 py-2">{fd.duration}</td>
                  <td className="px-4 py-2">₹{fd.maturityAmount}</td>
                </tr>
              ))}
              {investmentData.fds.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-400">
                    No FDs available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Investment;
