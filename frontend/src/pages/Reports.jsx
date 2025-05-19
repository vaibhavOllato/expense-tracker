// import React, { useState } from "react";

// const tabs = [
//   "Spending",
//   "Income",
//   "Net Income",
//   "Savings",
//   "Net Worth",
//   "Monthly Summary",
//   "Refund Tracker",
// ];

// const Reports = () => {
//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-extrabold mb-8 tracking-wide">Reports</h1>

//       {/* Tabs with pill style */}
//       <div className="flex gap-2 mb-6 flex-wrap">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`capitalize px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
//               activeTab === tab
//                 ? "bg-violet-100 text-violet-900 shadow-sm"
//                 : "bg-white text-gray-500 hover:bg-violet-50"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Content */}
//       <div className="flex-grow p-6 rounded-lg bg-gradient-to-tr from-violet-50 to-violet-100 shadow-inner overflow-auto min-h-0">
//         <p className="text-base leading-relaxed">
//           {activeTab} content will appear here.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Reports;



import React, { useState } from "react";

const tabs = [
  "Spending",
  "Income",
  "Net Income",
  "Savings",
  "Net Worth",
  "Monthly Summary",
  "Refund Tracker",
];

const Reports = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-extrabold text-violet-900 tracking-wide">Reports</h1>

      {/* Tabs with pill style */}
      <div className="flex gap-1 mb-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`capitalize px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-300 ${
              activeTab === tab
                ? "bg-violet-100 text-violet-900 shadow-sm"
                : "bg-white text-gray-500 hover:bg-violet-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-grow p-4 rounded-lg bg-gradient-to-tr from-violet-50 to-violet-100 shadow-inner overflow-auto min-h-0">
        <p className="text-sm leading-relaxed">{activeTab} content will appear here.</p>
      </div>
    </div>
  );
};

export default Reports;
