import { Button } from "@/components/ui/button";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type ToggleMenuFunction = () => void;

interface MenuManager {
  toggleMenu: ToggleMenuFunction;
}

const MobileNavbar = ({ toggleMenu }: MenuManager) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);

  const handleLogOut = () => {
    dispatch(logout());
  };
  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 origin-top-right transform p-2 transition-transform lg:hidden duration-500 ease-in-out`}
    >
      <div className="divide-y-2 divide-gray-50 bg-slate-50 dark:bg-slate-950  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="px-5 pb-6 pt-5">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center space-x-2">
              <h2 className="font-bold text-lg">
                Recover <span className="text-red-500">Ease</span>
              </h2>
            </div>
            <div className="-mr-2">
              <div>
                <Button
                  onClick={toggleMenu}
                  className="w-full h-full rounded-full p-2"
                >
                  <span className="sr-only">Close menu</span>
                  <X className="size-5" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <nav className="grid gap-y-4">
              {token && (
                <Link to="/dashboard" className="decoration-none font-semibold">
                  Dashboard
                </Link>
              )}
              <Link
                to="/all-relief-goods"
                className="decoration-none font-semibold"
              >
                Relief Goods
              </Link>
              <Link
                to="/leaderboard"
                className="decoration-none font-semibold"
              >
                Leaderboard
              </Link>
              <Link
                to="/community"
                className="decoration-none font-semibold"
              >
                Community
              </Link>
              <Link
                to="/volunteer"
                className="decoration-none font-semibold"
              >
                Volunteer
              </Link>
            </nav>
            {token ? (
              <Button className="mt-4 w-1/2 mx-auto" onClick={handleLogOut}>
                Log Out
              </Button>
            ) : (
              <Link to="/login">
                <Button className="mt-4 w-1/2 mx-auto">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
