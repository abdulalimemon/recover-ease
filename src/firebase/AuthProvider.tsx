import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

type AuthContextData = {
  user: User | null;
  loading: boolean;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

// Async logOut function with Firebase signOut
const logOut = async () => {
  await signOut(auth);
};

// Async googleSignIn function to use GoogleAuthProvider
const googleSignIn = async () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};

// Create a context for user authentication, initially with null user and true loading state
export const userAuthContext = createContext<AuthContextData>({
  user: null,
  loading: true, 
  logOut,
  googleSignIn,
});

// The UserAuthProvider component to wrap your app and provide user auth context
export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); 
      } else {
        setUser(null);
      }
      setLoading(false); 
    });

    return () => {
      unsubscribe();
    };
  }, []); 

  // Value provided to context consumers
  const value: AuthContextData = {
    user,
    loading, 
    logOut,
    googleSignIn,
  };

  return (
    <userAuthContext.Provider value={value}>
      {children}
    </userAuthContext.Provider>
  );
};

// Hook to consume the auth context in any component
export const useAuth = () => {
  return useContext(userAuthContext);
};
