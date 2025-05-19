import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";

const LogoutModal = ({ open, handleClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all stored session/user data
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl">
        {/* Close Icon */}

        {/* Icon */}
        <div className="flex justify-center items-center bg-violet-100 text-violet-700 w-12 h-12 rounded-full mx-auto mb-4">
          <FaSignOutAlt size={24} />
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-800">
          Log Out?
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Are you sure you want to end your session?
        </p>

        <div className="mt-6 flex justify-between gap-3">
          <button
            onClick={handleClose}
            className="w-1/2 py-2 text-black rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="w-1/2 py-2 rounded-xl bg-violet-900 text-white hover:bg-violet-800 transition font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
