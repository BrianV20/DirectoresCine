import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DirectorContext, SearchContext } from "../Contexts";

export default function ResultsContainer() {
    const location = useLocation();
    const { searchResults, setSearchResults } = useContext(SearchContext);

    return (
        <>
        <p>Este es el results container</p>
        {/* {console.log(searchResults)} */}
        {/* <h2>{searchResults}</h2> */}
        </>
    )
};