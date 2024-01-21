import { createContext, useContext, useEffect, useState } from "react";


import { useAuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { boolean } from "zod";
import {
  addToFavorites,
  removeFromFavorites,
} from "../queryFirebase/favorite.query";
import debounce from "lodash.debounce";

const FavoritesContext = createContext<{
  companyAddFavouriteId: string;
  isSpinnerVisible: boolean;
  companyRemoveFavouriteId: string;
  addToFavorites: any;
  removeFromFavorites: any;
}>({
  companyAddFavouriteId: "",
  isSpinnerVisible: false,
  companyRemoveFavouriteId: "",
  addToFavorites: (companyId: string) => {},
  removeFromFavorites: (companyId: string) => {},
});

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesProvider({ children }: any) {
  // const [isFavorite, setIsFavorite] = useState(false);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);
  const { user } = useAuthContext();
  const router = useRouter();

  const [companyAddFavouriteId, setCompanyAddFavouriteId] = useState("");
  const [companyRemoveFavouriteId, setCompanyRemoveFavouriteId] = useState("");

  const handleAddToFavorites = debounce(async (companyId) => {
    if (!user) {
      localStorage.setItem("preLoginUrl", window.location.pathname);
      router.push(`/auth/login`);
      return;
    }

    const userId = user.uid;
    setCompanyAddFavouriteId(companyId);
    setCompanyRemoveFavouriteId("");
    setIsSpinnerVisible(true);
    await addToFavorites(userId, companyId);
    setIsSpinnerVisible(false);
  }, 500);

  const handleRemoveFromFavorites = debounce(async (companyId) => {
    if (!user) {
      localStorage.setItem("preLoginUrl", window.location.pathname);
      router.push(`/auth/login`);
      return;
    }

    const userId = user.uid;
    setCompanyRemoveFavouriteId(companyId);
    setCompanyAddFavouriteId("");
    setIsSpinnerVisible(true);
    await removeFromFavorites(userId, companyId);
    setIsSpinnerVisible(false);
  }, 500);

  return (
    <FavoritesContext.Provider
      value={{
        companyAddFavouriteId: companyAddFavouriteId,
        companyRemoveFavouriteId: companyRemoveFavouriteId,
        isSpinnerVisible: isSpinnerVisible,
        addToFavorites: handleAddToFavorites,
        removeFromFavorites: handleRemoveFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
