import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppSelector } from "@/redux/hooks";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const userInfo = useAppSelector((state) => state.auth.user);
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
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={userInfo?.name} readOnly className="mt-3" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={userInfo?.email}
              readOnly
              className="mt-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
