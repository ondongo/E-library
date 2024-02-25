import { Book } from "../models/models";

const getFirestore = () => import("../firebase/firestore");

export async function updateActivity(
  userId: string,
  type: string,
  decrease?: boolean
) {
  const { db, collection, doc, updateDoc, increment, setDoc, getDoc } =
    await getFirestore();

  const activitiesRef = doc(db, "activities", userId);

  try {
    const userActivityDocSnapshot = await getDoc(activitiesRef);
    if (userActivityDocSnapshot.exists()) {
      const updateData: any = {
        [`${type}Number`]: increment(1),
      };

      if (decrease) {
        updateData[`${type}Number`] = increment(-1);
      }

      await updateDoc(userActivityDocSnapshot.ref, updateData);
    } else {
      const newUserActivityDocRef = doc(db, "activities", userId);
      await setDoc(newUserActivityDocRef, {
        userId: userId,
        [`${type}Number`]: 1,
      });
    }

    return true;
  } catch (error) {
    console.error(`Error updating ${type}Number:`, error);
    return false;
  }
}

export async function getActivity(userId: string, cb: Function) {
  const { collection, db, where, query, onSnapshot } = await getFirestore();
  const docRef = collection(db, "activities");
  const q = query(docRef, where("userId", "==", userId));
  return onSnapshot(q, (querySnapshot) => {
    // best case scenario
    let company = querySnapshot.docs[0];
    cb({
      id: company.id,
      ...company.data(),
    });
  });
}
