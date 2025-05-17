import { useState } from "react";
import {
  Home,
  CreditCard,
  CalendarCheck,
  Eye,
  BarChart2,
  TrendingUp,
  Target,
  Settings,
  LifeBuoy,
  PanelsTopLeft,
} from "lucide-react";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LogoutModal from "./LogoutModal";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: <Home size={18} />, path: "/dashboard" },
    {
      name: "Transactions",
      icon: <CreditCard size={18} />,
      path: "/transactions",
    },
    {
      name: "Spending Plan",
      icon: <CalendarCheck size={18} />,
      path: "/spending-plan",
    },
    {
      name: "Bills & Payments",
      icon: <CreditCard size={18} />,
      path: "/bills-payments",
    },
    { name: "Watchlist", icon: <Eye size={18} />, path: "/watchlist" },
    { name: "Reports", icon: <BarChart2 size={18} />, path: "/reports" },
    {
      name: "Investments",
      icon: <TrendingUp size={18} />,
      path: "/investments",
    },
    { name: "Goals", icon: <Target size={18} />, path: "/goals" },
  ];

  const bottomItems = [
    { name: "Settings", icon: <Settings size={18} />, path: "/setting" },
    { name: "Help Center", icon: <LifeBuoy size={18} />, path: "/helpCenter" },
  ];

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div className="flex h-screen">
      <aside
        className={`flex flex-col justify-between bg-white/80 backdrop-blur-sm border-r border-gray-200 transition-all duration-300 ease-in-out ${
          collapsed ? "w-[60px]" : "w-[200px]"
        } shadow-sm`}
      >
        {/* Top Section */}
        <div className="px-2 py-3 space-y-2">
          <div className="flex items-center justify-between px-2">
            {!collapsed && (
              <h1 className="text-lg font-semibold text-violet-900 tracking-tight">
                Expense
              </h1>
            )}
            <button
              onClick={toggleSidebar}
              className="p-1 rounded hover:bg-gray-200"
            >
              <PanelsTopLeft size={16} />
            </button>
          </div>

          <nav className="mt-2">
            {navItems.map(({ name, icon, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-violet-900 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <span>{icon}</span>
                {!collapsed && <span>{name}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="px-2 py-2 space-y-1">
          {bottomItems.map(({ name, icon, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-violet-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <span>{icon}</span>
              {!collapsed && <span>{name}</span>}
            </NavLink>
          ))}

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-3 py-2 w-full rounded-md text-sm text-red-500 hover:bg-red-50 transition"
          >
            <FaSignOutAlt size={16} />
            {!collapsed && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      <LogoutModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
