import { getAuth } from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);
export {
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
  updateEmail,
  signOut,
  signInWithPopup,
  EmailAuthProvider,
  type Auth,
  type User,
  GoogleAuthProvider,
  type Unsubscribe
} from "firebase/auth";
