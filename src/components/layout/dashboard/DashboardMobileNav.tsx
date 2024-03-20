import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart, Wallet, ListPlus, Menu, X } from "lucide-react";

const DashboardMobileNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="lg:hidden">
      {showSidebar ? (
        <Menu className="w-6 h-6 mr-2"></Menu>
      ) : (
        <Menu
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-6 h-6 mr-2"
        ></Menu>
      )}
      <div
        className={`top-0 left-0 w-11/12 dark:bg-black bg-slate-100 py-1 px-10 fixed h-screen min-h-screen z-50 overflow-y-auto ease-in-out duration-500 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center py-5">
            <h2 className="font-bold text-lg">
              Recover <span className="text-red-500">Ease</span>
            </h2>
            <button
              className="text-xl rounded-full p-2 cursor-pointer fixed right-7 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <X className="size-6" />
            </button>
          </div>
          <div className="p-1 mt-2">
            <div>
              <div className="mt-6 flex flex-1 flex-col justify-between ">
                <nav className="-mx-3 space-y-6 ">
                  <div className="space-y-3 ">
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/dashboard/home"
                    >
                      <BarChart className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Dashboard
                      </span>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/dashboard/supplies"
                    >
                      <Wallet className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">Supplies</span>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/dashboard/create-supplies"
                    >
                      <ListPlus className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Create Supplies
                      </span>
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMobileNav;
