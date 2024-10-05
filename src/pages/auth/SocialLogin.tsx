import { useContext } from "react";
import { userAuthContext } from "@/firebase/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "@/components/layout/Loading";
import { Button } from "@/components/ui/button";

export type Text = {
  text: String;
};

const SocialLogin = ({ text }: Text) => {
  const authContext = useContext(userAuthContext);
  if (!authContext) {
    return <Loading />;
  }

  const { googleSignIn } = authContext;
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  // Check if authContext is null before accessing its properties
  const handleGoogleSignIn = () => {
    if (!authContext) {
      console.error("Auth context is not available.");
      return;
    }

    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      loggedInUser;
      navigate(from, { replace: true });
    });
  };

  return (
    <>
      <Button className="w-full py-5" onClick={handleGoogleSignIn}>
        <span className="mr-2 inline-block">
          <svg
            className="h-6 w-6 text-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
          </svg>
        </span>
        {text}
      </Button>
    </>
  );
};

export default SocialLogin;
