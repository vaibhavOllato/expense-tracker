// import React from "react";
// import AccountOverview from "../components/AccountOverview";
// import SpendingPlan from "../components/SpendingPlan";

// const Dashboard = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       {/* Left: Small Attractive Account Cards */}
//       <div className="lg:col-span-1 space-y-4">
//         <AccountOverview />
//         <SpendingPlan/>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from "react";
import AccountOverview from "../components/AccountOverview";
import SpendingPlan from "../components/SpendingPlan";
import TopSpendingCategories from "../components/TopSpendingCategories";
import SavingGoals from "../components/SavingGoals";
import SpendingAnalytics from "../components/SpendingAnalytics";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left side: Account Overview */}
      <div>
        <AccountOverview />
      </div>

      {/* Right side: Spending Plan */}
      <div>
        <SpendingPlan />
      </div>
      <div>
        <TopSpendingCategories />
      </div>
      <div>
        <SavingGoals />
      </div>
      <div>
        <SpendingAnalytics />
      </div>
    </div>
  );
};

export default Dashboard;
