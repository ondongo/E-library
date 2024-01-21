import {
  SearchHistory,
  type CompanyType,
  type SearchState,
} from "../models/models";
import { updateActivity } from "./activity.query";

const getFirestore = () => import("@/firebase/firestore");

export function buildHistoryLink(searchState: SearchState, page: number) {
  const params = new URLSearchParams(searchState);
  if (page > 0) {
    params.set("page", `${page}`);
  }
  return `${process.env.NEXT_PUBLIC_HOST_URL}/search?${params.toString()}`;
}

export async function addHistoryEntry(searchHistory: SearchHistory) {
  const { db, collection, addDoc } = await getFirestore();
  try {
    const historyRef = collection(db, "searchHistory");
    const historyDocRef = await addDoc(historyRef, {
      ...searchHistory,
      date: new Date(),
    });
    return historyDocRef.id;
  } catch (error) {
    console.error("Error adding to history:", error);
    return null;
  }
}

export async function updateHistoryEntry(
  searchHistory: SearchHistory,
  searchHistoryId?: string
) {
  const { db, updateDoc, doc } = await getFirestore();
  if (searchHistoryId) {
    const ref = doc(db, searchHistoryId);
    try {
      await updateDoc(ref, searchHistory);
    } catch (error) {
      console.error("Failed to update history: ", error);
    }
  }
}

export async function getSearchHistory(userId: string) {
  const { db, collection, query, where, orderBy, getDocs } =
    await getFirestore();

  const historyRef = collection(db, "searchHistory");
  const q = query(
    historyRef,
    where("userId", "==", userId),
    orderBy("date", "desc")
  );

  try {
    const querySnapshot = await getDocs(q);
    const searchHistory: any[] = [];

    querySnapshot.forEach((doc) => {
      searchHistory.push({
        docId: doc.id,
        ...doc.data(),
      });
    });

    return searchHistory;
  } catch (error) {
    console.error("Error getting search history:", error);
    return null;
  }
}

export const findHistoryById = async (id: string) => {
  try {
    const { doc, getDoc, db } = await getFirestore();
    const historyDocRef = doc(db, "searchHistory", id);
    const historyDocSnapshot = await getDoc(historyDocRef);
    if (historyDocSnapshot.exists()) {
      const historyData = historyDocSnapshot.data();
      const cp = {
        docId: historyDocSnapshot.id,
        ...historyData,
      } as SearchHistory;
      return cp;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error retrieving company details:", error);
    return null;
  }
};

export async function deleteHistoryEntryWithListener(
  searchHistoryId: string,
  onUpdate: (history: any[]) => void
) {
  const { db, deleteDoc, doc, collection, onSnapshot } = await getFirestore();

  const ref = doc(db, "searchHistory", searchHistoryId);
  try {
    await deleteDoc(ref);

    const historyRef = collection(db, "searchHistory");
    onSnapshot(historyRef, (querySnapshot) => {
      const updatedHistory: any[] = [];
      querySnapshot.forEach((doc) => {
        updatedHistory.push({
          docId: doc.id,
          ...doc.data(),
        });
      });
      onUpdate(updatedHistory);
    });

    console.log("History entry deleted successfully");
  } catch (error) {
    console.error("Failed to delete history entry: ", error);
  }
}

export async function getLatestSearchHistory(userId: string): Promise<SearchHistory | null> {
  const { db, collection, query, where, orderBy, limit, getDocs } = await getFirestore();

  const historyRef = collection(db, "searchHistory");
  const q = query(
    historyRef,
    where("userId", "==", userId),
    orderBy("date", "desc"),
    limit(1)
  );

  try {
    const querySnapshot = await getDocs(q);
    const latestHistoryDoc = querySnapshot.docs[0];

    if (latestHistoryDoc) {
      // Convertir le DocumentSnapshot en un objet SearchHistory
      const latestHistoryData = latestHistoryDoc.data() as SearchHistory;
      return {
        docId: latestHistoryDoc.id,
        ...latestHistoryData,
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting latest search history:", error);
    return null;
  }
}
