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
  loading: boolean; // Added `loading` to indicate if auth state is being checked
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
  loading: true, // Initial loading state set to true
  logOut,
  googleSignIn,
});

// The UserAuthProvider component to wrap your app and provide user auth context
export const UserAuthProvider: React.FunctionComponent<
  IUserAuthProviderProps
> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Set user if authenticated
      } else {
        setUser(null); // Set user to null if not authenticated
      }
      setLoading(false); // Stop loading once auth state is checked
    });

    // Clean up subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  // Value provided to context consumers
  const value: AuthContextData = {
    user,
    loading, // Pass loading state to context
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
