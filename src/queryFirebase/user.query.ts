import { UserDetails } from "../models/models";
const getFirestore = () => import("../firebase/firestore");

export async function findUserDetailsByUser(uid: string) {
  try {
    const { getDoc, doc, db } = await getFirestore();
    const userDetailsDocRef = doc(db, "users", uid);
    const userDetailsDoc = await getDoc(userDetailsDocRef);

    if (!userDetailsDoc.exists()) {
      return null;
    }

    const { firstName, lastName, phoneNumber, avatarURL, avatarPATH } =
      userDetailsDoc.data();
    const userDetails = {
      firstName,
      lastName,
      phoneNumber,
      avatarURL,
      avatarPATH,
    } as UserDetails;

    return userDetails;
  } catch (error) {
    console.error("Error retrieving userDetails:", error);
    throw error;
  }
}
