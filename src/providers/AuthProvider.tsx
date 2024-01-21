"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { useToast } from "@chakra-ui/react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { AuthErrorToMessage } from "@/utils/utils";
import { auth } from "../firebase/auth";
import { useRouter } from "next/navigation";

const getFirestore = () => import("../firebase/firestore");

function AuthErrorHandler(
  AuthErrorCode: string,
  toast: Function,
  title: string,
  ...args: any[]
) {
  let message = AuthErrorToMessage(AuthErrorCode);
  if (!message) {
    console.error(AuthErrorCode);
    return;
  }
  console.error(message);
  toast({
    title: title,
    description: message,
    status: "error",
    duration: 7000,
    isClosable: true,
  });
}

// Création du contexte
export const AuthContext = createContext<{
  user: any;
  onLogin: (email: string, password: string) => void;
  onSignup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) => void;
  logOut: (logoutPagePath?: string) => void;
  nullifyUser: () => void;
}>({
  user: null,
  onLogin: (...params) => void 0,
  onSignup: (...params) => void 0,
  logOut: (logoutPagePath?: string) => void 0,
  nullifyUser: () => void 0,
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext can only be used within an AuthProvider");
  }
  return context;
};

// AuthProvider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const toast = useToast();
  const [user, setUser] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  //=======Signin-Function
  const onLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: any) {
      AuthErrorHandler(error.code, toast, "Login Error");
    }
  };

  //=======Signup-Function
  const onSignup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string
  ) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const { addDoc, setDoc, doc, collection, db } = await getFirestore();
      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        phoneNumber,
      });

      //sendEmailVerification(email);
      router.push("/signin");
    } catch (error: any) {
      AuthErrorHandler(error.code, toast, "Signup Error");
    }
  };

  //=======logOut-Function
  const logOut = async () => {
    try {
      await signOut(auth);
      router.push("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  //=====
  const nullifyUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin,
        onSignup,
        logOut,
        nullifyUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
