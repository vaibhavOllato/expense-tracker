import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center text-violet-900">
          Expense Tracker
        </h2>
        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full border px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-800"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full border px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-800 "
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-900 text-white text-sm py-2 rounded-md hover:bg-violet-800 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/register"
            className="text-violet-900 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
