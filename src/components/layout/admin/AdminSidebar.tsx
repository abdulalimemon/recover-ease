import { userAuthContext } from "@/firebase/AuthProvider";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import {
  BarChart,
  Wallet,
  ListPlus,
  LogIn,
  MessageSquareCode,
} from "lucide-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const dispatch = useAppDispatch();
  const { logOut } = useContext(userAuthContext);

  const handleLogOut = () => {
    dispatch(logout());
    logOut();
  };
  return (
    <div className="bg-[#010A1F] hidden lg:block">
      <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r border-[#010A1F] dark:border-[#333333] px-5 py-8">
        <div className="text-center">
          <Link
            to="/"
            className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500"
          >
            Recover Ease
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
                to="/admin/home"
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
                to="/admin/supplies"
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
                to="/admin/create-supplies"
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
                to="/admin/testimonial"
              >
                <MessageSquareCode className="h-5 w-5" aria-hidden="true" />
                <span className="mx-2 text-sm font-medium">Testimonial</span>
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

export default AdminSidebar;
