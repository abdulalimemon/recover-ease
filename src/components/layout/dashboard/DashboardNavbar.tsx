import { Moon, Search, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import userPic from "@/assets/img/user.png";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";
import DashboardMobileNav from "./DashboardMobileNav";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useContext } from "react";
import { userAuthContext } from "@/firebase/AuthProvider";
import { logout } from "@/redux/features/auth/authSlice";

const DashboardNavbar = () => {
  const { setTheme } = useTheme();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.user);
  const { user, logOut } = useContext(userAuthContext);

  const handleLogOut = () => {
    dispatch(logout());
    logOut();
  };

  console.log(userInfo);
  return (
    <div className="h-14 lg:h-16 border-b-2 bg-slate-100 dark:bg-slate-900 flex items-center justify-end px-5 lg:px-10">
      <div className="relative hidden">
        <Search
          fontSize={20}
          className="text-black dark:text-white  absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-black dark:text-white bg-white dark:bg-black text-sm focus:outline-none active:outline-none border w-[24rem] h-10 pl-11 pr-4 rounded-sm border-slate-300"
        />
      </div>
      <div className="lg:hidden flex items-center justify-center">
        <DashboardMobileNav />
        <div className="">
          <Link to="/" className="font-bold text-lg">
            Recover <span className="text-red-500">Ease</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
          <Link to="/" className="font-semibold mr-5">Home</Link>
        <div>
          <div className="size-5 mr-4">
            <Sun
              className="absolute h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
              onClick={() => setTheme("dark")}
            />
            <Moon
              className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
              onClick={() => setTheme("light")}
            />
          </div>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src={userPic}
                className="size-8 lg:size-10 cursor-pointer"
                alt="user"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 ">
              <DropdownMenuLabel className="text-center">
                {userInfo?.name || user?.displayName} <br />
                {userInfo?.email || user?.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="cursor-pointer">
                <Link to="/dashboard/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuItem
                onClick={handleLogOut}
                className="cursor-pointer"
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
