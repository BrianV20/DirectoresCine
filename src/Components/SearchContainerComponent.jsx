import { useState } from "react";
// import { createContext } from "react";
import { SearchContext } from "../Contexts";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ResultsContainer from "./ResultsContainer";
import SearchBar from "./SearchBar";

export default function SearchContainerComponent() {
    const [searchResults, setSearchResults] = useState({});

    return (
        <>
        <SearchContext.Provider value={{ searchResults, setSearchResults }}>
            <NavBar />
            <SearchBar />
            <ResultsContainer />
            <Footer />
        </SearchContext.Provider>
        </>
    )
};