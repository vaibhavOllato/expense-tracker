import React from "react";
import { CalendarDays, ReceiptText } from "lucide-react";

const BillsAndPayments = () => {
  const bills = [
    { title: "Electricity Bill", amount: "₹1200", due: "May 22, 2025" },
    { title: "Internet Plan", amount: "₹899", due: "May 25, 2025" },
    { title: "Credit Card", amount: "₹2,500", due: "May 28, 2025" },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-4">
      <div className="flex items-center gap-2 mb-2">
        <ReceiptText className="text-violet-900 w-5 h-5" />
        <h2 className="text-base font-semibold text-violet-900">Upcoming Bills</h2>
      </div>

      <ul className="space-y-2">
        {bills.map((bill, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-cyan-50 hover:bg-cyan-100 transition rounded-lg px-3 py-2"
          >
            <div>
              <p className="text-sm font-medium text-gray-700">{bill.title}</p>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <CalendarDays className="w-4 h-4" />
                Due: {bill.due}
              </p>
            </div>
            <p className="text-violet-800 text-sm font-semibold">{bill.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillsAndPayments;
