import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { userAuthContext } from "@/firebase/AuthProvider";
import { useAppSelector } from "@/redux/hooks";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const userInfo = useAppSelector((state) => state.auth.user);
  const { user } = useContext(userAuthContext);
  return (
    <div>
      <Helmet>
        <title>Profile - Recover Ease</title>
      </Helmet>
      <div>
        <h2 className="text-center text-xl font-semibold py-5">My Profile</h2>
      </div>
      <div className="bg-slate-100 dark:bg-slate-900 p-5 rounded-md">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div>
            <Label>Name</Label>
            <Input
              value={userInfo?.name || user?.displayName || ""}
              readOnly
              className="mt-3"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              value={userInfo?.email || user?.email || ""}
              readOnly
              className="mt-3"
            />
          </div>
          <div>
            <Label>Role</Label>
            {userInfo?.role === "admin" ? (
              <Input value="Admin" readOnly className="mt-3" />
            ) : (
              <Input value="User" readOnly className="mt-3" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
