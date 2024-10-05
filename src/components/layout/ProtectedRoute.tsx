import { userAuthContext } from "@/firebase/AuthProvider";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  const { loading, user } = useContext(userAuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  if (!user && !token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
