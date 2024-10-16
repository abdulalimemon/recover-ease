import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BarChart, Wallet, Menu, X, MessageSquareCode } from "lucide-react";

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
            <h2 className="font-bold text-lg text-gradient">Recover Ease</h2>
            <button
              className="rounded-full p-2 cursor-pointer fixed right-7 z-50 bg-black dark:bg-white dark:text-black text-white"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <X className="size-5" />
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
                      onClick={() => setShowSidebar(!showSidebar)}
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
                      onClick={() => setShowSidebar(!showSidebar)}
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
                      to="/dashboard/review"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <MessageSquareCode
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="mx-2 text-sm font-medium">
                        Review
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
