import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { API_URL, options } from "../constants";
import NavBar from './NavBar';
import MovieContainer from './MovieContainer';
import Footer from './Footer';
import MovieByIdInfoContainer from "./MovieByIdInfoContainer";

export default function MovieContainerComponent() {

    return (
        <>
            <NavBar />
            <MovieByIdInfoContainer />
            <MovieContainer />
            <Footer />
        </>
    )
    //Despues tengo que mostrar el componente MovieContainer (con un texto encima que diga Otras peliculas del director). Tambien tengo que modificar MovieContainer para que pueda recibir un texto por parametro, tipo para que diga "Otras peliculas de David Lynch" o "Peliculas".
};