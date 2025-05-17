import React from "react";
// import { useAuth } from "../context/AuthContext";

const Header = () => {
  // const { user, loading } = useAuth();

  // if (loading) return <div className="flex justify-center items-center p-4">Loading...</div>;

  return (
    <header className="bg-gradient-to-r from-violet-900 to-violet-600 text-white shadow-sm px-4 py-3 flex justify-between items-center rounded-b-md">
      <h1 className="text-lg font-semibold tracking-tight">Expense</h1>

      {/* User Info Section */}
      <div className="flex items-center gap-3 text-sm">
        <p className="hidden sm:block">Hi, Vaibhav</p>
        <img
          src="https://ui-avatars.com/api/?name=vaibhav+t&background=ffffff&color=0ab9d8"
          alt="User Avatar"
          className="w-8 h-8 rounded-full border border-white shadow"
        />
      </div>
    </header>
  );
};

export default Header;
