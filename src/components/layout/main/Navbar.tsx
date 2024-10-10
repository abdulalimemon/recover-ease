import { useContext, useState } from "react";
import Container from "../Container";
import { Menu, Moon, Sun } from "lucide-react";
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
import MobileNavbar from "./MobileNavbar";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { userAuthContext } from "@/firebase/AuthProvider";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { user, logOut } = useContext(userAuthContext);
  const userInfo = useAppSelector((state) => state.auth.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    dispatch(logout());
    logOut();
  };

  return (
    <header className="relative w-full border-b-2 h-14 flex justify-center items-center">
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="inline-flex items-center space-x-2">
            <Link to="/" className="font-bold text-lg text-gradient">
              Recover Ease
            </Link>
          </div>

          <div className="hidden lg:block">
            <ul className="inline-flex justify-center items-center space-x-8">
              <li>
                <Link
                  to="/all-relief-goods"
                  className="decoration-none font-semibold"
                >
                  Relief Goods
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="decoration-none font-semibold"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/community" className="decoration-none font-semibold">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="decoration-none font-semibold">
                  Volunteer
                </Link>
              </li>
              <li className="size-5">
                <Sun
                  className="absolute h-[1.25rem] w-[1.25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
                <Moon
                  className="absolute h-[1.25rem] w-[1.25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              </li>

              <li>
                {userInfo || user ? (
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <img
                          src={userPic}
                          className="size-8 cursor-pointer"
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
                          {userInfo?.role === "admin" ? (
                            <Link to="/admin">
                              <DropdownMenuItem className="cursor-pointer">
                                Dashboard
                              </DropdownMenuItem>
                            </Link>
                          ) : (
                            <Link to="/dashboard">
                              <DropdownMenuItem className="cursor-pointer">
                                Dashboard
                              </DropdownMenuItem>
                            </Link>
                          )}
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
                ) : (
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex justify-center items-center">
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
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <>
              <MobileNavbar toggleMenu={toggleMenu} />
            </>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
