// SearchValueContext.tsx
import React, { useState, createContext, useContext, ReactNode } from "react";

interface SearchValueContextType {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
  addSearchValue: (newSearchValue: string) => void;
}

export const SearchValueContext = createContext<SearchValueContextType | undefined>(undefined);

interface SearchValueProviderProps {
  children: ReactNode;
}

export function SearchValueProvider({ children }: SearchValueProviderProps) {
  const [searchValue, setSearchValue] = useState("");

  function addSearchValue(newSearchValue: string) {
    setSearchValue(newSearchValue);
  }

  const contextValue: SearchValueContextType = {
    setSearchValue,
    searchValue,
    addSearchValue,
  };

  return (
    <SearchValueContext.Provider value={contextValue}>
      {children}
    </SearchValueContext.Provider>
  );
}

export const useSearchValueContext = () => {
  const context = useContext(SearchValueContext);
  if (!context) {
    throw new Error("useSearchValueContext must be used within a SearchValueProvider");
  }
  return context;
};
