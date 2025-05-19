// import React, { useState } from "react";
// import { CalendarDays, MoreVertical, Plus, FileDown } from "lucide-react";

// const BillsPayments = () => {
//   const [activeTab, setActiveTab] = useState("overview");

//   const overviewData = {
//     income: 32000,
//     expense: 24500,
//     net: 7500,
//   };

//   const reminders = [
//     {
//       date: "2025-05-20",
//       payee: "Jio Fiber",
//       category: "Internet",
//       status: "Unpaid",
//       amount: 999,
//     },
//     {
//       date: "2025-05-22",
//       payee: "Netflix",
//       category: "Entertainment",
//       status: "Paid",
//       amount: 499,
//     },
//   ];

//   return (
//     <div className="relative">
//       {/* Top Action Buttons */}
//       <div className="flex justify-between items-center mb-4">
//         {/* Title aligned left */}
//         <h1 className="text-xl font-bold text-violet-900">Bills & Payments</h1>

//         {/* Buttons aligned right */}
//         <div className="flex gap-2">
//           <button className="bg-violet-900 hover:bg-violet-800 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
//             <Plus className="w-4 h-4" /> Add
//           </button>
//           <button className="bg-violet-100 hover:bg-violet-200 text-violet-900 px-4 py-2 rounded-md text-sm flex items-center gap-2 border border-violet-300">
//             <FileDown className="w-4 h-4" /> Export
//           </button>
//         </div>
//       </div>

//       {/* Main Card with Border */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-xl overflow-hidden">
//         {/* Left Section */}
//         <div className="lg:col-span-2 bg-white border border-gray-300 rounded-xl p-4 flex flex-col justify-between shadow-sm">

//           <div>
//             <h1 className="text-xl font-bold text-violet-900 mb-4">Summary</h1>

//             {/* Tabs */}
//             <div className="flex gap-2 mb-6">
//               {["overview", "cash flow", "all recurring"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`capitalize px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
//                     ${
//                       activeTab === tab
//                         ? "bg-violet-100 text-violet-900 shadow-sm"
//                         : "bg-white text-gray-500 hover:bg-violet-50"
//                     }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Overview Cards */}
//             {activeTab === "overview" && (
//               <div className="grid grid-cols-3 gap-4 mb-6">
//                 <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
//                   <p className="text-xs text-green-800">Income</p>
//                   <h2 className="text-lg font-bold text-green-900">
//                     ₹{overviewData.income}
//                   </h2>
//                 </div>
//                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
//                   <p className="text-xs text-red-800">Expense</p>
//                   <h2 className="text-lg font-bold text-red-900">
//                     ₹{overviewData.expense}
//                   </h2>
//                 </div>
//                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
//                   <p className="text-xs text-blue-800">Net</p>
//                   <h2 className="text-lg font-bold text-blue-900">
//                     ₹{overviewData.net}
//                   </h2>
//                 </div>
//               </div>
//             )}

//             {/* Table */}
//             <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
//               <table className="w-full text-sm text-left bg-white">
//                 <thead className="bg-violet-100 text-violet-900">
//                   <tr>
//                     <th className="px-3 py-2">Date</th>
//                     <th className="px-3 py-2">Payee</th>
//                     <th className="px-3 py-2">Category</th>
//                     <th className="px-3 py-2">Status</th>
//                     <th className="px-3 py-2">Amount</th>
//                     <th className="px-3 py-2 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {reminders.map((item, idx) => (
//                     <tr key={idx} className="border-t hover:bg-violet-50">
//                       <td className="px-3 py-2">{item.date}</td>
//                       <td className="px-3 py-2">{item.payee}</td>
//                       <td className="px-3 py-2">{item.category}</td>
//                       <td className="px-3 py-2">
//                         <span
//                           className={`text-xs font-medium px-2 py-1 rounded-full ${
//                             item.status === "Paid"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="px-3 py-2 font-semibold">
//                         ₹{item.amount}
//                       </td>
//                       <td className="px-3 py-2 text-center">
//                         <MoreVertical className="w-4 h-4 text-gray-500 mx-auto" />
//                       </td>
//                     </tr>
//                   ))}
//                   {reminders.length === 0 && (
//                     <tr>
//                       <td
//                         colSpan="6"
//                         className="text-center py-3 text-gray-500"
//                       >
//                         No reminders found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Right Section - Calendar */}
//         <div className="bg-white border-l border border-gray-300 rounded-xl p-4 flex flex-col justify-between">
//           <div>
//             <h1 className="text-lg font-semibold text-violet-900 flex items-center gap-1 mb-4">
//               <CalendarDays className="w-5 h-5" /> May 2025
//             </h1>
//             {/* Calendar */}
//             <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                 <div key={day} className="font-semibold text-violet-900">
//                   {day}
//                 </div>
//               ))}
//               {Array.from({ length: 31 }, (_, i) => (
//                 <div
//                   key={i}
//                   className="border rounded-md py-2 hover:bg-violet-100 cursor-pointer"
//                 >
//                   {i + 1}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BillsPayments;



import React, { useState } from "react";
import { CalendarDays, MoreVertical, Plus, FileDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const BillsPayments = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewData = {
    income: 32000,
    expense: 24500,
    net: 7500,
  };

  const cashFlowData = [
    { month: "Jan", income: 5000, expense: 3000 },
    { month: "Feb", income: 7000, expense: 4000 },
    { month: "Mar", income: 6000, expense: 4200 },
    { month: "Apr", income: 8000, expense: 5000 },
    { month: "May", income: 6000, expense: 6300 },
  ];

  const reminders = [
    {
      date: "2025-05-20",
      payee: "Jio Fiber",
      category: "Internet",
      status: "Unpaid",
      amount: 999,
    },
    {
      date: "2025-05-22",
      payee: "Netflix",
      category: "Entertainment",
      status: "Paid",
      amount: 499,
    },
  ];

  return (
    <div className="relative">
      {/* Top Action Buttons */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-violet-900">Bills & Payments</h1>
        <div className="flex gap-2">
          <button className="bg-violet-900 hover:bg-violet-800 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add
          </button>
          <button className="bg-violet-100 hover:bg-violet-200 text-violet-900 px-4 py-2 rounded-md text-sm flex items-center gap-2 border border-violet-300">
            <FileDown className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-xl overflow-hidden">
        {/* Left Section */}
        <div className="lg:col-span-2 bg-white border border-gray-300 rounded-xl p-4 flex flex-col justify-between shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-violet-900 mb-4">Summary</h1>

            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {["overview", "cash flow", "all recurring"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-violet-100 text-violet-900 shadow-sm"
                      : "bg-white text-gray-500 hover:bg-violet-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-green-800">Income</p>
                  <h2 className="text-lg font-bold text-green-900">
                    ₹{overviewData.income}
                  </h2>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-red-800">Expense</p>
                  <h2 className="text-lg font-bold text-red-900">
                    ₹{overviewData.expense}
                  </h2>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-blue-800">Net</p>
                  <h2 className="text-lg font-bold text-blue-900">
                    ₹{overviewData.net}
                  </h2>
                </div>
              </div>
            )}

            {/* Cash Flow Tab */}
            {activeTab === "cash flow" && (
              <div className="mb-6">
                <h2 className="text-md font-semibold text-violet-900 mb-3">
                  Cash Flow (Monthly)
                </h2>

                {/* Chart */}
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={cashFlowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="income"
                      stroke="#10B981"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="expense"
                      stroke="#EF4444"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>

                {/* Table */}
                <div className="mt-4 overflow-x-auto border border-gray-200 rounded-lg shadow">
                  <table className="w-full text-sm text-left bg-white">
                    <thead className="bg-violet-100 text-violet-900">
                      <tr>
                        <th className="px-3 py-2">Month</th>
                        <th className="px-3 py-2">Income</th>
                        <th className="px-3 py-2">Expense</th>
                        <th className="px-3 py-2">Net</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cashFlowData.map((item, idx) => (
                        <tr key={idx} className="border-t hover:bg-violet-50">
                          <td className="px-3 py-2">{item.month}</td>
                          <td className="px-3 py-2 text-green-700 font-medium">
                            ₹{item.income}
                          </td>
                          <td className="px-3 py-2 text-red-700 font-medium">
                            ₹{item.expense}
                          </td>
                          <td className="px-3 py-2 font-semibold">
                            ₹{item.income - item.expense}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Table for overview */}
            {activeTab === "overview" && (
              <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                <table className="w-full text-sm text-left bg-white">
                  <thead className="bg-violet-100 text-violet-900">
                    <tr>
                      <th className="px-3 py-2">Date</th>
                      <th className="px-3 py-2">Payee</th>
                      <th className="px-3 py-2">Category</th>
                      <th className="px-3 py-2">Status</th>
                      <th className="px-3 py-2">Amount</th>
                      <th className="px-3 py-2 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reminders.map((item, idx) => (
                      <tr key={idx} className="border-t hover:bg-violet-50">
                        <td className="px-3 py-2">{item.date}</td>
                        <td className="px-3 py-2">{item.payee}</td>
                        <td className="px-3 py-2">{item.category}</td>
                        <td className="px-3 py-2">
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${
                              item.status === "Paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                        <td className="px-3 py-2 font-semibold">
                          ₹{item.amount}
                        </td>
                        <td className="px-3 py-2 text-center">
                          <MoreVertical className="w-4 h-4 text-gray-500 mx-auto" />
                        </td>
                      </tr>
                    ))}
                    {reminders.length === 0 && (
                      <tr>
                        <td
                          colSpan="6"
                          className="text-center py-3 text-gray-500"
                        >
                          No reminders found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Calendar */}
        <div className="bg-white border border-gray-300 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-lg font-semibold text-violet-900 flex items-center gap-1 mb-4">
              <CalendarDays className="w-5 h-5" /> May 2025
            </h1>
            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-700">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="font-semibold text-violet-900">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className="border rounded-md py-2 hover:bg-violet-100 cursor-pointer"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillsPayments;
