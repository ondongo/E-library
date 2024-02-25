import { indexName } from "@/clients/algoliaclient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  useClearRefinements,
  useInstantSearch,
  useMenu,
  useSearchBox,
} from "react-instantsearch";

import { SearchHistory, SearchState } from "../models/models";
import {
  addHistoryEntry,
  buildHistoryLink,
  updateHistoryEntry,
} from "../queryFirebase/history.query";
import { useAuthContext } from "./AuthProvider";
import { useRouter } from "next/navigation";
import { updateActivity } from "../queryFirebase/activity.query";
const SearchContext = createContext<null | any>(null);

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (context === undefined) {
    throw new Error("SearchContext hook used outside of SearchProvider");
  }

  return context;
}
function SearchProvider({ children }: { children: React.ReactNode }) {
  const [companyName, setCompanyName] = useState("");
  const [companyCity, setCompanyCity] = useState("");
  const [companySector, setCompanySector] = useState<string>();
  const [companyHoraire, setCompanyHoraire] = useState<string>();

  const [companyPostalCode, setCompanyPostalCode] = useState<string>();
  const [companies, setCompanies] = useState<any[]>([]);
  const { results, setUiState, setIndexUiState } = useInstantSearch();
  const [currentSearchPage, setCurrentSearchPage] = useState<number | null>(
    null
  );

  const [currentSearchHistory, setCurrentSearchHistory] =
    useState<SearchHistory | null>(null);
  const [searchResult, setSearchResult] = useState<any>();
  const [searchState, setSearchState] = useState<SearchState>();

  const { user } = useAuthContext();

 /*  const isEqualToCurrentSearch = useCallback(() => {
    return (
      currentSearchHistory?.searchState.city === searchState?.city &&
      currentSearchHistory?.searchState.companyName ===
        searchState?.companyName &&
      currentSearchHistory?.searchState.horaire === searchState?.horaire &&
      currentSearchHistory?.searchState?.postalCode ===
        searchState?.postalCode &&
      currentSearchHistory?.searchState.sector === searchState?.sector
    );
  }, [currentSearchHistory, searchState]); */

  const router = useRouter();

 /*  const updateSearchHistory = useCallback(
    async (results: any) => {
      if (results?.hits.length === 0) return;
      console.log("Running search update");
      if (
        results &&
        currentSearchHistory &&
        currentSearchHistory.searchState 
        //&&
        //isEqualToCurrentSearch()
      ) {
        if (results.page !== currentSearchHistory.pageNumber) {
          //@ts-ignore
          setCurrentSearchHistory((previous) => {
            return {
              ...previous,
              link: buildHistoryLink(
                currentSearchHistory.searchState,
                results.page
              ), // Update the link.
              pageNumber: results?.page ?? 0,
              results: [...(previous?.results ?? []), ...results.hits],
            };
          });
          updateHistoryEntry(
            currentSearchHistory,
            currentSearchHistory?.docId
          ).catch((error) => console.error(error));
        }
      } else {
        if (searchState && results) {
          // 1. Create a new searchHistory document with the currentSearchState.
          const newSearchHistory: SearchHistory = {
            userId: user.uid,
            searchState: searchState,
            pageNumber: results.page,
            results: results.hits,
            link: buildHistoryLink(searchState, results.page),
          };
          const docId = await addHistoryEntry(newSearchHistory);
          if (docId) {
            newSearchHistory.docId = docId;
          }
          // 2. Set the currentSearchHistoryObject here.
          setCurrentSearchHistory(newSearchHistory);
        }
      }
    },
    [currentSearchHistory, isEqualToCurrentSearch, searchState, user.uid]
  );
 */
  useEffect(() => {
    //updateSearchHistory(searchResult);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResult]);

  const { refine } = useSearchBox();
  const { refine: refineSector } = useMenu({
    attribute: "sector",
  });

  const { refine: refineCity } = useMenu({
    attribute: "city",
  });

  const { refine: refinePostalCode } = useMenu({
    attribute: "postalCode",
  });

  const { refine: refineHoraire } = useMenu({
    attribute: "horaire",
  });

  /*   const { refine: clearRefine } = useClearRefinements({
    includedAttributes: ["sector"],
  });  */

  /*   function triggerSearch() {
    if (companyName) {
      refine(companyName);
      setSearchState({
        city: "Dakar",
        companyName: companyName,
        horaire: "9:00-18:00",
        postalCode: "x",
        sector: "X",
      });
    }
    return null;
  } */

  const [nameError, setNameError] = useState("");
  const [cityError, setCityError] = useState("");

  function triggerSearch() {
    if (companyName?.trim() === "") {
      setNameError(
        "Le nom de l'entreprise est obligatoire.Veuillez saisir au moins une lettre pour affiner votre recherche"
      );
      return;
    } else {
      setNameError("");
    }
    if (companyCity?.trim() === "") {
      setCityError("La ville est obligatoire.");
      return;
    } else {
      setCityError("");
    }
    if (companySector || companyCity || companyHoraire || companyPostalCode) {
      console.log(
        "fffff",
        companySector,
        companyCity,
        companyHoraire,
        companyPostalCode
      );
      setIndexUiState((prev: any) => {
        return {
          ...prev,
          query: companyName,
          menu: {
            ...prev.menu,
            sector: companySector,
            city: companyCity,
            horaire: companyHoraire,
            postalCode: companyPostalCode,
          },
        };
      });

      /* setSearchState({
        city: companyCity ?? "",
        companyName: companyName ?? "",
        horaire: companyHoraire ?? "",
        postalCode: companyPostalCode ?? "",
        sector: companySector ?? "",
      }); */
    }

    return null;
  }

  useEffect(() => {
    setCompanies(results.hits);
    setSearchResult(results);

    const queryParams = new URLSearchParams();
    queryParams.set("name", companyName ?? "");
    queryParams.set("city", companyCity ?? "");
    queryParams.set("sector", companySector ?? "");
    queryParams.set("postalCode", companyPostalCode ?? "");
    queryParams.set("plageHoraire", companyHoraire ?? "");

    router.push(`/search?${queryParams.toString()}`);

    // console.log("here", results.hits, "hereResult???????????????", results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);
  return (
    <SearchContext.Provider
      value={{
        companyName,
        setCompanyName,
        companySector,
        setCompanySector,
        companyHoraire,
        setCompanyHoraire,
        companyPostalCode,
        setCompanyPostalCode,
        companyCity,
        setCompanyCity,
        triggerSearch,
        companies,
        nameError,
        cityError,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
