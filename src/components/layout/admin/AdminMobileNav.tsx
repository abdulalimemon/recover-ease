import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Wallet,
  ListPlus,
  MessageSquareCode,
  Users,
  BookUser,
  HandCoins,
  Newspaper,
  MessageSquareQuote,
  Mail,
  Podcast,
  Menu,
  X,
} from "lucide-react";

const AdminMobileNav = () => {
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
                      to="/admin/home"
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
                      to="/admin/user"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <Users className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">Users</span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/messages"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <Mail className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">Messages</span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/comments"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <MessageSquareQuote
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="mx-2 text-sm font-medium">Comments</span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/supplies"
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
                      to="/admin/relief-goods"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <Newspaper className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Relief Goods
                      </span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/create-supplies"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <ListPlus className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Create Supplies
                      </span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/volunteer"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <BookUser className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Volunteer
                      </span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/donations"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <HandCoins className="h-5 w-5" aria-hidden="true" />
                      <span className="mx-2 text-sm font-medium">
                        Donations
                      </span>
                    </NavLink>

                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/review"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <MessageSquareCode
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="mx-2 text-sm font-medium">Review</span>
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "DashboardNavMobile bg-gray-900 dark:bg-gray-700 text-gray-100"
                          : "DashboardNavMobile"
                      }
                      to="/admin/newsletters"
                      onClick={() => setShowSidebar(!showSidebar)}
                    >
                      <Podcast
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                      <span className="mx-2 text-sm font-medium">
                        Newsletters
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

export default AdminMobileNav;
