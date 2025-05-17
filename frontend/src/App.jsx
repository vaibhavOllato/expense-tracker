import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Dashboard from "./pages/Dashboard";
import Layout from "./layouts/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Routes under Layout */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
