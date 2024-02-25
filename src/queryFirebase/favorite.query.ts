import { getTotalPages } from "@/utils/utils";
import { Book } from "../models/models";
import { findBookById } from "./book.query";
import { updateActivity } from "./activity.query";

const getFirestore = () => import("../firebase/firestore");

export async function addToFavorites(userId: string, BookId: string) {
  const { db, collection, addDoc, updateDoc, doc, increment } =
    await getFirestore();
  try {
    const favoritesRef = collection(db, "favorites");
    const favoriteDocRef = await addDoc(favoritesRef, {
      userId: userId,
      BookId: BookId,
    });
    await updateActivity(userId, "favorite");
    return true;
  } catch (error) {
    console.error("Error adding to favorites:", error);
    return false;
  }
}

export async function removeFromFavorites(userId: string, BookId: string) {
  const {
    doc,
    db,
    collection,
    getDocs,
    query,
    where,
    deleteDoc,
    getDoc,
    updateDoc,
  } = await getFirestore();
  try {
    const favoritesRef = collection(db, "favorites");
    const querySnapshot = await getDocs(
      query(
        favoritesRef,
        where("userId", "==", userId),
        where("BookId", "==", BookId)
      )
    );

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    await updateActivity(userId, "favorite", true);
    return true;
  } catch (error) {
    console.error("Error removing from favorites:", error);
    return false;
  }
}

export async function getIdFavorites(userId: string, BookId: string) {
  const { db, collection, getDocs, query, where } = await getFirestore();
  try {
    const favoritesRef = collection(db, "favorites");
    const querySnapshot = await getDocs(
      query(
        favoritesRef,
        where("userId", "==", userId),
        where("BookId", "==", BookId)
      )
    );

    if (!querySnapshot.empty) {
      const favoriteDoc = querySnapshot.docs[0];
      const favoriteId = favoriteDoc.id;
      return favoriteId;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching favorite ID:", error);
    return null;
  }
}

export async function checkFavorites(userId: string, itemId: string) {
  try {
    const favoriteId = await getIdFavorites(userId, itemId);

    if (favoriteId !== null) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de la vérification des favoris :", error);
    return false;
  }
}

export const getPaginateFavoriteBookForUser = async (
  userId: string,
  _limit?: number,
  _startAfter?: any
): Promise<{
  Book: Book[];
  pageCount: number;
  lastDocId: any;
  FavCount: number;
}> => {
  try {
    const {
      db,
      collection,
      query,
      where,
      getDocs,
      startAfter,
      limit,
      getCountFromServer,
      //orderBy,
    } = await getFirestore();
    const favoritesRef = collection(db, "favorites");
    let queryRef = query(favoritesRef, where("userId", "==", userId));

    if (_startAfter) {
      queryRef = query(queryRef, startAfter(_startAfter));
    }

    let lastDocId;
    let count;
    count = await getCountFromServer(queryRef);

    if (_limit) {
      queryRef = query(queryRef, limit(_limit as number));
    }

    const querySnapshot = await getDocs(queryRef);
    const favoriteBookIds: string[] = [];

    querySnapshot.forEach((doc) => {
      const favoriteData = doc.data();
      favoriteBookIds.push(favoriteData.BookId);
    });

    const favoriteItems: (Book | null)[] = await Promise.all(
      favoriteBookIds.map(async (BookId) => {
        const favoriteItem = await findBookById(BookId);
        return favoriteItem;
      })
    );

    const filteredFavoriteBook: Book[] = favoriteItems.filter(
      (item): item is Book => item !== null
    );

    if (querySnapshot.size > 0) {
      lastDocId = querySnapshot.docs[querySnapshot.docs.length - 1];
    }
    return {
      Book: filteredFavoriteBook,
      pageCount: getTotalPages(3, count.data().count),
      lastDocId: lastDocId,
      FavCount: count.data().count,
    };
  } catch (error) {
    console.error("Error retrieving favorite items:", error);
    throw error;
  }
};
