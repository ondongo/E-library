import { Timestamp } from "firebase/firestore";

export type book = {
  id: string;
  name: string;
  status: string;
  description: string;
  author: string;
};

export type UserDetails = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatarURL?: string;
  isPremium?: boolean;
};

export type history = {
  id: string;
  userId: string;
  timestamp: Timestamp;
  searchQuery: string;
  results: book[];
};

export type favorite = {
  id: string;
  userId: string;
  bookId: string;
  isFavorite: boolean;
};

export type chat = {
  id: string;
};

export type activity = {
  id: string;
  userId: string;
  favoriteNumber: number;
  historyNumber: number;
  downloadNumber: number;
  searchNumber: number;
};

export type SearchState = {
  bookName: string;
  city: string;
  sector: string;
  postalCode: string;
  horaire: string;
};

export type bookType = book;

export type SearchHistory = {
  docId?: string;
  userId: string;
  searchState: SearchState;
  pageNumber: number;
  results: bookType[];
  link: string;
  date?: Timestamp;
};
