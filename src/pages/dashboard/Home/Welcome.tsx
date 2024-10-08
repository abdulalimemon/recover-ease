import img from "@/assets/img/welcome3.png";
import { userAuthContext } from "@/firebase/AuthProvider";
import { useAppSelector } from "@/redux/hooks";
import { useContext } from "react";

const Welcome = () => {
  const userInfo = useAppSelector((state) => state.auth.user);
  const { user } = useContext(userAuthContext);
  return (
    <section>
      <div className="bg-gray-200 dark:bg-slate-800 rounded-md flex flex-col lg:flex-row items-center justify-between p-5 h-full lg:h-40">
        <div>
          <p className="text-gradient font-semibold">
            Hey, {userInfo?.name || user?.displayName}
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text">
            Welcome to Your Dashboard
          </h2>
          <p className="pt-4 text-sm font-semibold text">
            Effortlessly Manage and Monitor Your Relief Operations
          </p>
        </div>
        <div className="w-1/2">
          <div className="w-full flex  justify-center">
            <img src={img} alt="Welcome" className="size-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
