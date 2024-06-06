import { createContext } from "react";

export const DirectorContext = createContext(309);

export const SearchContext = createContext({
    searchResults: {},
    setSearchResults: () => {},
  });