import React, { createContext, useContext, useState, ReactNode } from "react";

type Filter = {
  category: string;
  value: string;
};

type Tag = {
  id: string;
  text: string;
  category: string;
};

type FilterContextType = {
  selectedFilters: Filter[];
  tags: Tag[];
  addFilter: (filter: Filter) => void;
  removeFilter: (filterId: string) => void; 
  removeTag: (tagId: string) => void; 
  filtersCountByCategory: Record<string, number>; 
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);


export const useTagsFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilters must be used within a FilterProvider");
  }
  return context;
};

type FilterProviderProps = {
  children: any;
};

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [filtersCountByCategory, setFiltersCountByCategory] = useState<
    Record<string, number>
  >({});

  /*   const addFilter = (filter: Filter) => {
    console.log(`Ajout du filtre : ${filter}`);
    setSelectedFilters((prev) => [...prev, filter]);
    createTag(filter);
  }; */

  const addFilter = (filter: Filter) => {
    const tagId = `${filter.category}:${filter.value}`;
    console.log(
      `Ajout du filtre : ${filter.value} dans la catégorie : ${filter.category}`
    );

    
    setSelectedFilters((prev) => [...prev, filter]);

   
    setTags((prev) => [
      ...prev,
      { id: tagId, text: filter.value, category: filter.category },
    ]);

    setFiltersCountByCategory((prev) => ({
      ...prev,
      [filter.category]: (prev[filter.category] || 0) + 1,
    }));
  };

  const removeFilter = (filterId: string) => {
    const [category, value] = filterId.split(":");
    console.log(
      `Suppression du filtre : ${value} de la catégorie : ${category}`
    );
    setSelectedFilters((prev) =>
      prev.filter((f) => `${f.category}:${f.value}` !== filterId)
    );

   
    setTags((prev) => prev.filter((tag) => tag.id !== filterId));

    setFiltersCountByCategory((prev) => ({
      ...prev,
      [category]: prev[category] - 1,
    }));
  };

  const removeTag = (tagId: string) => {
    removeFilter(tagId);
  };

  return (
    <FilterContext.Provider
      value={{
        selectedFilters,
        tags,
        addFilter,
        removeFilter,
        removeTag,
        filtersCountByCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
