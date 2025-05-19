import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !gender ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/register", {
        firstName,
        lastName,
        email,
        phone,
        // gender,
        password,
      });

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      alert(error.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-2">
      <div className="bg-white p-5 rounded shadow-md w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4 text-center text-violet-900">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border px-3 py-1.5 rounded-md text-sm focus:ring-1 focus:ring-violet-800"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 w-full border px-3 py-1.5 rounded-md text-sm focus:ring-1 focus:ring-violet-800"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full border px-3 py-1.5 rounded-md text-sm focus:ring-1 focus:ring-violet-800"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                className="mt-1 w-full border px-3 py-1.5 rounded-md text-sm focus:ring-1 focus:ring-violet-800"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div>
              {/* <div> */}
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                className="mt-1 w-full border px-3 py-1.5 pr-10 rounded-md text-sm focus:ring-1 focus:ring-violet-800"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-8 text-gray-500 hover:text-violet-600 focus:outline-none"
              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={showConfirmPass ? "text" : "password"}
                className="mt-1 w-full border px-3 py-1.5 pr-10 rounded-md text-sm focus:ring-1 focus:ring-violet-800"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-8 text-gray-500 hover:text-violet-600 focus:outline-none"
              >
                {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {/* </div> */}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-violet-900 text-white text-sm py-2 rounded-md hover:bg-violet-800 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-3 text-center text-xs text-gray-600">
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
