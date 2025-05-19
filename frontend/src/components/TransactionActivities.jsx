import React, { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";

const TransactionActivities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const transactions = [
    {
      account: "Axis Bank",
      date: "2025-05-18",
      status: "Debit",
      payee: "Big Bazaar",
      category: "Grocery",
      amount: "-₹1,500",
    },
    {
      account: "PhonePe",
      date: "2025-05-17",
      status: "Credit",
      payee: "UPI Refund",
      category: "Refund",
      amount: "+₹500",
    },
    {
      account: "HDFC",
      date: "2025-05-16",
      status: "Debit",
      payee: "Jio",
      category: "Utilities",
      amount: "-₹399",
    },
  ];

  const filteredTxns = transactions.filter((txn) =>
    txn.payee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow p-4">
      <h1 className="text-xl font-bold text-violet-900 mb-4">Transaction Activities</h1>

      {/* Search & Filter & Add */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search Payee"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm w-full sm:w-52 focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          <select className="border rounded-md px-2 py-1 text-sm text-gray-700">
            <option value="">All Categories</option>
            <option value="Grocery">Grocery</option>
            <option value="Utilities">Utilities</option>
            <option value="Refund">Refund</option>
          </select>

          <button className="flex items-center gap-1 bg-violet-900 text-white px-3 py-1 rounded-md text-sm hover:bg-violet-800">
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
          <thead className="bg-violet-100 text-violet-900">
            <tr>
              <th className="px-3 py-2 border">Account</th>
              <th className="px-3 py-2 border">Date</th>
              <th className="px-3 py-2 border">Status</th>
              <th className="px-3 py-2 border">Payee</th>
              <th className="px-3 py-2 border">Category</th>
              <th className="px-3 py-2 border">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTxns.map((txn, index) => (
              <tr key={index} className="border-b hover:bg-violet-50">
                <td className="px-3 py-2 border">{txn.account}</td>
                <td className="px-3 py-2 border">{txn.date}</td>
                <td className="px-3 py-2 border">{txn.status}</td>
                <td className="px-3 py-2 border">{txn.payee}</td>
                <td className="px-3 py-2 border">{txn.category}</td>
                <td className={`px-3 py-2 border font-medium ${txn.status === "Debit" ? "text-red-500" : "text-green-500"}`}>
                  {txn.amount}
                </td>
              </tr>
            ))}
            {filteredTxns.length === 0 && (
              <tr>
                <td colSpan="6" className="px-3 py-2 text-center text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionActivities;
