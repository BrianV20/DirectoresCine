import { useState, useEffect, createContext } from "react";
import React from "react";
import { DirectorContext } from "../Contexts";
import DirectorInfo from './DirectorInfo';
// import Movie from "./MovieContainer";
import SearchBar from "./SearchBar";
import MovieContainer from "./MovieContainer";

export default function DirectorContainerComponent () {

    return (
        <>
        <SearchBar />
        <DirectorInfo />
        <MovieContainer />
        </>
    )
};