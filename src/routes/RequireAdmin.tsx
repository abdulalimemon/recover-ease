import Loading from "@/components/layout/Loading";
import { userAuthContext } from "@/firebase/AuthProvider";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }: any) => {
  const { user, logOut, loading } = useContext(userAuthContext);
  const userInfo = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  if (loading) {
    return <Loading></Loading>;
  }

  if (userInfo?.role !== "admin") {
    dispatch(logout());
    logOut();
    return <Navigate to="*" />;
  }

  return children;
};

export default RequireAdmin;
