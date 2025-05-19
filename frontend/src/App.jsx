import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/Layout";
import Transaction from "./pages/Transaction";
import BillsAndPayments from "./components/BillsAndPayments";
import BillsPayments from "./pages/BillsPayments";
import Investment from "./pages/Investment";
import SpendingPlan from "./components/SpendingPlan";
import Spending from "./pages/Spending";
import Watchlist from "./pages/Watchlist";
import EmiTracker from "./pages/EmiTracker";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Wrap protected pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/bills-payments" element={<BillsPayments />} />
          <Route path="/investments" element={<Investment />} />
           <Route path="/spending-plan" element={<Spending />} />
           <Route path="/watchlist" element={<Watchlist />} />
           <Route path="/goals" element={<EmiTracker />} />
             <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
