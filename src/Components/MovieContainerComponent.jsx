import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { API_URL, options } from "../constants";
import NavBar from './NavBar';
import MovieContainer from './MovieContainer';
import Footer from './Footer';
import MovieByIdInfoContainer from "./MovieByIdInfoContainer";
import SearchBar from "./SearchBar";

export default function MovieContainerComponent() {

    return (
        <>
            <NavBar />
            <SearchBar />
            <MovieByIdInfoContainer />
            <MovieContainer />
            <Footer />
        </>
    )
};