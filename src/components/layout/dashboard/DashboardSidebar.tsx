import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { BarChart, Wallet, ListPlus, LogIn, MessageSquareCode } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-[#010A1F] hidden lg:block">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r border-[#010A1F] dark:border-[#333333] px-5 py-8">
        <div className="text-center">
          <Link to="/" className="font-bold text-2xl text-white">
            Recover <span className="text-red-500">Ease</span>
          </Link>
        </div>
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "DashboardNavLink bg-gray-100 text-gray-700"
                    : "DashboardNavLink"
                }
                to="/dashboard/home"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "DashboardNavLink bg-gray-100 text-gray-700"
                    : "DashboardNavLink"
                }
                to="/dashboard/supplies"
              >
                <Wallet className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Supplies</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "DashboardNavLink bg-gray-100 text-gray-700"
                    : "DashboardNavLink"
                }
                to="/dashboard/create-supplies"
              >
                <ListPlus className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                  Create Supplies
                </span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "DashboardNavLink bg-gray-100 text-gray-700"
                    : "DashboardNavLink"
                }
                to="/dashboard/create-testimonial"
              >
                <MessageSquareCode className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">
                Create Testimonial
                </span>
              </NavLink>
            </div>
          </nav>
          <div className="mt-6">
            <div className="mt-6 ">
              <button
                className="DashboardNavLink w-full flex justify-center border border-gray-700"
                onClick={handleLogOut}
              >
                <LogIn className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default DashboardSidebar;
