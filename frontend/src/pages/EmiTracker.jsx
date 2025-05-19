// import React from "react";

// const emiData = [
//   {
//     id: 1,
//     product: "iPhone 14",
//     price: 80000,
//     downpayment: 10000,
//     tenure: 8,
//     financeCompany: "Bajaj Finance",
//     interestRate: 12,
//     emiPerMonth: 9000,
//     paidEmis: 4,
//     extraPaid: 2000,
//   },
//   {
//     id: 2,
//     product: "Dell Laptop",
//     price: 60000,
//     downpayment: 5000,
//     tenure: 6,
//     financeCompany: "HDFC Bank",
//     interestRate: 10,
//     emiPerMonth: 9500,
//     paidEmis: 2,
//     extraPaid: 0,
//   },
// ];

// const EmiTracker = () => {
//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-xl font-semibold text-violet-900">📋 EMI Tracker</h2>
//       {emiData.map((item) => {
//         const totalEmiAmount = item.emiPerMonth * item.tenure;
//         const paidAmount = item.emiPerMonth * item.paidEmis + item.extraPaid;
//         const balanceEmis = item.tenure - item.paidEmis;

//         return (
//           <div
//             key={item.id}
//             className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm space-y-2"
//           >
//             <div className="flex justify-between items-center">
//               <div className="font-semibold text-violet-900">{item.product}</div>
//               <div className="text-sm text-gray-500">{item.financeCompany}</div>
//             </div>

//             <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
//               <div>💰 Product Price: ₹{item.price.toLocaleString()}</div>
//               <div>🏦 Downpayment: ₹{item.downpayment.toLocaleString()}</div>
//               <div>📆 Tenure: {item.tenure} months</div>
//               <div>📈 Interest Rate: {item.interestRate}%</div>
//               <div>💳 EMI/Month: ₹{item.emiPerMonth.toLocaleString()}</div>
//               <div>📤 Extra Paid: ₹{item.extraPaid.toLocaleString()}</div>
//             </div>

//             <div className="text-sm mt-2">
//               ✅ EMIs Paid: <strong>{item.paidEmis}</strong> / {item.tenure} &nbsp; | &nbsp;
//               ❌ Remaining: <strong>{balanceEmis}</strong>
//             </div>

//             <div className="text-sm">
//               💸 Total Paid: ₹{paidAmount.toLocaleString()} / ₹
//               {totalEmiAmount.toLocaleString()}
//             </div>

//             <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
//               <div
//                 className="h-2 bg-violet-700 rounded-full"
//                 style={{
//                   width: `${(item.paidEmis / item.tenure) * 100}%`,
//                 }}
//               ></div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default EmiTracker;

import React from "react";
import {
  FaCreditCard,
  FaPiggyBank,
  FaCalendarAlt,
  FaDollarSign,
  FaCheck,
  FaTimes,
  FaPlus,
} from "react-icons/fa";

const emiData = [
  {
    id: 1,
    product: "iPhone 14 Pro",
    price: 120000,
    downpayment: 20000,
    tenure: 8,
    financeCompany: "Bajaj Finance",
    interestRate: 12,
    emiPerMonth: 12500,
    paidEmis: 5,
    extraPaid: 5000,
  },
  {
    id: 2,
    product: "Asus ROG Laptop",
    price: 90000,
    downpayment: 15000,
    tenure: 6,
    financeCompany: "HDFC",
    interestRate: 10,
    emiPerMonth: 12500,
    paidEmis: 2,
    extraPaid: 0,
  },
  {
    id: 3,
    product: "Samsung TV",
    price: 60000,
    downpayment: 10000,
    tenure: 5,
    financeCompany: "ICICI",
    interestRate: 11,
    emiPerMonth: 10000,
    paidEmis: 3,
    extraPaid: 1000,
  },
];

const EmiTrackerCompact = () => {
  return (
    <div className="min-h-screen p-4 font-sans text-violet-900">
      <header className="flex justify-between items-center mb-3">
        <h1 className="text-2xl font-bold">EMI Tracker</h1>
        <button className="flex items-center gap-1 bg-violet-900 hover:bg-violet-800 text-white px-3 py-1.5 rounded-md shadow-md transition text-sm">
          <FaPlus />
          Add EMI
        </button>
      </header>

      {/* Grid with smaller gap and no mx-auto on cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {emiData.map((item) => {
          const balanceEmis = item.tenure - item.paidEmis;
          const totalEmiAmount = item.emiPerMonth * item.tenure;
          const paidAmount = item.emiPerMonth * item.paidEmis + item.extraPaid;
          const progress = Math.round((item.paidEmis / item.tenure) * 100);

          return (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow border border-violet-300 p-3"
            >
              <h2 className="text-lg font-semibold mb-1">{item.product}</h2>
              <p className="text-xs text-violet-700 mb-2">
                Finance: {item.financeCompany}
              </p>

              <div className="grid grid-cols-2 gap-x-3 gap-y-1 mb-3 text-xs">
                <Info
                  label="Price"
                  value={`₹${item.price.toLocaleString()}`}
                  icon={<FaDollarSign size={12} />}
                />
                <Info
                  label="Downpayment"
                  value={`₹${item.downpayment.toLocaleString()}`}
                  icon={<FaPiggyBank size={12} />}
                />
                <Info
                  label="Tenure (months)"
                  value={item.tenure}
                  icon={<FaCalendarAlt size={12} />}
                />
                <Info
                  label="Interest Rate"
                  value={`${item.interestRate}%`}
                  icon={<FaCreditCard size={12} />}
                />
                <Info
                  label="Monthly EMI"
                  value={`₹${item.emiPerMonth.toLocaleString()}`}
                  icon={<FaDollarSign size={12} />}
                />
                <Info
                  label="Extra Paid"
                  value={`₹${item.extraPaid.toLocaleString()}`}
                  icon={<FaDollarSign size={12} />}
                />
              </div>

              <ProgressBar progress={progress} />

              <div className="flex justify-between mt-1 text-xs font-medium">
                <span className="flex items-center gap-1 text-green-600">
                  <FaCheck size={12} /> {item.paidEmis} Paid
                </span>
                <span className="flex items-center gap-1 text-red-600">
                  <FaTimes size={12} /> {balanceEmis} Remaining
                </span>
              </div>

              <p className="text-right text-sm font-semibold mt-2">
                Paid: ₹{paidAmount.toLocaleString()} / ₹
                {totalEmiAmount.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Info = ({ label, value, icon }) => (
  <div className="flex items-center gap-1">
    <div className="text-violet-500">{icon}</div>
    <div>
      <p className="text-violet-700">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-violet-200 rounded-full h-2 overflow-hidden mt-2">
    <div
      className="h-2 bg-violet-900 rounded-full transition-all duration-500 ease-in-out"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

export default EmiTrackerCompact;
