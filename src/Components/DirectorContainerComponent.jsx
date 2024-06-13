import { useState, useEffect, createContext } from "react";
import React from "react";
// import { DirectorContext } from "../Contexts";
import DirectorInfo from './DirectorInfo';
// import Movie from "./MovieContainer";
// import SearchBar from "./SearchBar";
import MovieContainer from "./MovieContainer";
import NavBar from "./NavBar";
import DirectorCombobox from "./DirectorCombobox";

export default function DirectorContainerComponent () {

    return (
        <>
        <NavBar />
        {/* <SearchBar /> */}
        <div className="aca va a ir la foto del director supongo">
            <DirectorCombobox />
            <DirectorInfo />
            <MovieContainer />
        </div>
        </>
    )
};