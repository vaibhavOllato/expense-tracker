import React from "react";
import AccountOverview from "../components/AccountOverview";
import BillsAndPayments from "../components/BillsAndPayments";
import TransactionActivities from "../components/TransactionActivities";

const Transaction = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
      {/* Left: Account Overview */}
      <div className="lg:col-span-1">
        <AccountOverview />
      </div>

      {/* Right: Bills & Payments + Activities */}
      <div className="lg:col-span-2 space-y-6">
        <BillsAndPayments />
        <TransactionActivities />
      </div>
    </div>
  );
};

export default Transaction;
