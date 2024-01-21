import { Timestamp } from "firebase/firestore";

export enum TypeBook {
  AUDIO = "AUDIO",
  PDF = "PDF",
}

export const categorieList = [
  "POUR LES NULS",
  "ÉCOLOGIE",
  "NATURE ET ANIMAUX",
  "POLITIQUE",
  "SANTÉ",
  "SCIENCE",
  "SOCIETE",
  "SPIRITUALITÉ",
  "ÉSOTÉRISME",
  "ESSAI",
  "HISTOIRE",
  "HUMOUR",
  "JOURNALISME",
  "PHILOSOPHIE",
  "POÉSIE",
  "ACTUALITÉ",
  "BIEN-ÊTRE",
  "BIOGRAPHIE",
  "CUISINE ET VIN",
  "DICTIONNAIRES",
  "ÉCONOMIE",
] as const;

export type Category = (typeof categorieList)[number];

export type Book = {
  id: string;
  name: string;
  status: "AVAILABLE" | "BORROWED" | "UNAVAILABLE";
  description: string;
  author: string;
  typeBook: TypeBook;
  ratings: number[];
  totalRatings: number;
  reviewers: string[];
  categorie: Category;
};

export type UserDetails = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatarURL?: string;
  isPremium?: boolean;
};


export type UserPdfProgress = {
  userId: string;
  bookId: string;
  currentPage: number;
};


export type UserAudioProgress = {
  userId: string;
  bookId: string;
  currentTime: number;
};


export type History = {
  id: string;
  userId: string;
  timestamp: Timestamp;
  searchQuery: string;
  results: Book[];
};




export type Favorite = {
  id: string;
  userId: string;
  bookId: string;
  isFavorite: boolean;
};

export type chat = {
  id: string;
};

export type Activity = {
  id: string;
  userId: string;
  favoriteNumber: number;
  historyNumber: number;
  readBookNumber: number;
  searchNumber: number;
};

export type SearchState = {
  bookName: string;
  categorie: string;
};

export type SearchHistory = {
  docId?: string;
  userId: string;
  searchState: SearchState;
  pageNumber: number;
  results: Book[];
  link: string;
  date?: Timestamp;
};
