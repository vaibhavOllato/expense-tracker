import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Wallet,
  PiggyBank,
  LineChart,
} from "lucide-react";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(amount);

const AccountOverview = () => {
  const [openSections, setOpenSections] = useState({
    banking: false,
    wise: false,
    assets: false,
  });

  const toggleSection = (key) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="bg-white rounded-xl shadow p-3 space-y-2 w-full text-sm text-gray-700">
      <h2 className="text-base font-semibold flex items-center gap-2 text-violet-900">
        <Wallet size={18} />
        Accounts Overview
      </h2>

      {/* Net Worth */}
      <div className="flex justify-between font-medium text-gray-800 text-sm">
        <span>Net Worth</span>
        <span className="text-gray-900">{formatCurrency(420000)}</span>
      </div>

      {/* Banking */}
      <hr className="my-1" />
      <div
        onClick={() => toggleSection("banking")}
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-1.5 py-0.5 rounded transition"
      >
        <span className="flex items-center gap-1.5 font-medium">
          {openSections.banking ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          Banking
        </span>
        <span>{formatCurrency(120000)}</span>
      </div>
      {openSections.banking && (
        <div className="ml-4 mt-1 bg-gray-50 rounded p-1.5 space-y-1 text-gray-600">
          <div className="flex justify-between border-b py-0.5">
            <span>Cash</span>
            <span>{formatCurrency(40000)}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span>Checking</span>
            <span>{formatCurrency(80000)}</span>
          </div>
        </div>
      )}

      {/* Wise & Saving Goals */}
      <hr className="my-1" />
      <div
        onClick={() => toggleSection("wise")}
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-1.5 py-0.5 rounded transition"
      >
        <span className="flex items-center gap-1.5 font-medium">
          {openSections.wise ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          Wise & Saving Goals
        </span>
        <span>{formatCurrency(30000)}</span>
      </div>
      {openSections.wise && (
        <div className="ml-4 mt-1 bg-gray-50 rounded p-1.5 space-y-1 text-gray-600">
          <div className="flex justify-between border-b py-0.5">
            <span>Wise Account</span>
            <span>{formatCurrency(15000)}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span>Saving Goals</span>
            <span>{formatCurrency(15000)}</span>
          </div>
        </div>
      )}

      {/* Retirement */}
      <hr className="my-1" />
      <div className="flex justify-between font-medium">
        <span className="flex items-center gap-1.5">
          <PiggyBank size={15} />
          Retirement
        </span>
        <span>{formatCurrency(80000)}</span>
      </div>

      {/* Assets */}
      <hr className="my-1" />
      <div
        onClick={() => toggleSection("assets")}
        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-1.5 py-0.5 rounded transition"
      >
        <span className="flex items-center gap-1.5 font-medium">
          {openSections.assets ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          Assets
        </span>
        <span>{formatCurrency(160000)}</span>
      </div>
      {openSections.assets && (
        <div className="ml-4 mt-1 bg-gray-50 rounded p-1.5 space-y-1 text-gray-600">
          <div className="flex justify-between border-b py-0.5">
            <span>IRA</span>
            <span>{formatCurrency(60000)}</span>
          </div>
          <div className="flex justify-between py-0.5">
            <span>Real Estate</span>
            <span>{formatCurrency(100000)}</span>
          </div>
        </div>
      )}

      {/* Investments */}
      <hr className="my-1" />
      <div className="flex justify-between font-medium">
        <span className="flex items-center gap-1.5">
          <LineChart size={15} />
          Investments
        </span>
        <span>{formatCurrency(90000)}</span>
      </div>
    </div>
  );
};

export default AccountOverview;

// import React, { useState } from "react";
// import { ChevronDown, ChevronRight, Wallet, PiggyBank, Banknote, Building2, LineChart } from "lucide-react";

// const formatCurrency = (amount) =>
//   new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     minimumFractionDigits: 0,
//   }).format(amount);

// const AccountOverview = () => {
//   const [openSections, setOpenSections] = useState({
//     banking: false,
//     wise: false,
//     assets: false,
//   });

//   const toggleSection = (key) =>
//     setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-5 space-y-4 w-full text-sm text-gray-700">
//       <h2 className="text-lg font-semibold flex items-center gap-2 text-cyan-600">
//         <Wallet size={20} />
//         Accounts Overview
//       </h2>

//       {/* Net Worth */}
//       <div className="flex justify-between font-medium text-base text-gray-800">
//         <span>Net Worth</span>
//         <span>{formatCurrency(420000)}</span>
//       </div>

//       {/* Banking */}
//       <hr className="my-1" />
//       <div
//         onClick={() => toggleSection("banking")}
//         className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md transition"
//       >
//         <span className="flex items-center gap-2 font-medium">
//           {openSections.banking ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//           Banking
//         </span>
//         <span>{formatCurrency(120000)}</span>
//       </div>
//       {openSections.banking && (
//         <div className="ml-5 mt-1 bg-gray-50 rounded-md p-2 space-y-1 text-gray-600">
//           <div className="flex justify-between border-b py-1">
//             <span>Cash</span>
//             <span>{formatCurrency(40000)}</span>
//           </div>
//           <div className="flex justify-between py-1">
//             <span>Checking</span>
//             <span>{formatCurrency(80000)}</span>
//           </div>
//         </div>
//       )}

//       {/* Wise & Saving Goals */}
//       <hr className="my-1" />
//       <div
//         onClick={() => toggleSection("wise")}
//         className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md transition"
//       >
//         <span className="flex items-center gap-2 font-medium">
//           {openSections.wise ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//           Wise & Saving Goals
//         </span>
//         <span>{formatCurrency(30000)}</span>
//       </div>
//       {openSections.wise && (
//         <div className="ml-5 mt-1 bg-gray-50 rounded-md p-2 space-y-1 text-gray-600">
//           <div className="flex justify-between border-b py-1">
//             <span>Wise Account</span>
//             <span>{formatCurrency(15000)}</span>
//           </div>
//           <div className="flex justify-between py-1">
//             <span>Saving Goals</span>
//             <span>{formatCurrency(15000)}</span>
//           </div>
//         </div>
//       )}

//       {/* Retirement */}
//       <hr className="my-1" />
//       <div className="flex justify-between font-medium">
//         <span className="flex items-center gap-2">
//           <PiggyBank size={16} />
//           Retirement
//         </span>
//         <span>{formatCurrency(80000)}</span>
//       </div>

//       {/* Assets */}
//       <hr className="my-1" />
//       <div
//         onClick={() => toggleSection("assets")}
//         className="flex justify-between items-center cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md transition"
//       >
//         <span className="flex items-center gap-2 font-medium">
//           {openSections.assets ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
//           Assets
//         </span>
//         <span>{formatCurrency(160000)}</span>
//       </div>
//       {openSections.assets && (
//         <div className="ml-5 mt-1 bg-gray-50 rounded-md p-2 space-y-1 text-gray-600">
//           <div className="flex justify-between border-b py-1">
//             <span>IRA</span>
//             <span>{formatCurrency(60000)}</span>
//           </div>
//           <div className="flex justify-between py-1">
//             <span>Real Estate</span>
//             <span>{formatCurrency(100000)}</span>
//           </div>
//         </div>
//       )}

//       {/* Investments */}
//       <hr className="my-1" />
//       <div className="flex justify-between font-medium">
//         <span className="flex items-center gap-2">
//           <LineChart size={16} />
//           Investments
//         </span>
//         <span>{formatCurrency(90000)}</span>
//       </div>
//     </div>
//   );
// };

// export default AccountOverview;
