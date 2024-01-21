import { getFirestore } from 'firebase/firestore';
import { app } from './app';

export const db = getFirestore(app);

export {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  addDoc,
  getDocs,
  getDoc,
  doc,
  or,
  deleteDoc,
  documentId,
  serverTimestamp,
  limit,
  QueryDocumentSnapshot,
  setDoc,
  FieldValue,
  getCountFromServer,
  startAfter,
  startAt,
  increment,
  collectionGroup,
  QuerySnapshot,
  runTransaction
} from 'firebase/firestore';
