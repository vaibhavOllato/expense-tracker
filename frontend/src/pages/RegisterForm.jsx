import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    onRegister?.({ name, email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3">
      <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center text-violet-900">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 w-full border px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-800"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full border px-3 py-2 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-800"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              className="mt-1 w-full border px-3 py-2 pr-10 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-800"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-9 text-gray-500 hover:text-violet-600 focus:outline-none"
              tabIndex={-1}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showConfirmPass ? "text" : "password"}
              className="mt-1 w-full border px-3 py-2 pr-10 rounded-md text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-violet-800"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-9 text-gray-500 hover:text-violet-600 focus:outline-none"
              tabIndex={-1}
            >
              {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-violet-900 text-white text-sm py-2  rounded-md hover:bg-violet-800 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-violet-900 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
