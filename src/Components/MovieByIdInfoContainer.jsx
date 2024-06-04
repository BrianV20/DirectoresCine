import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { API_URL, IMAGE_PATH, options } from "../constants";
import { getYear } from '../Utils';
import { DirectorContext } from "../Contexts";

export default function MovieByIdInfoContainer() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const { directorId, setDirectorId } = useContext(DirectorContext);
    const [movieDirector, setMovieDirector] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`${API_URL}/movie/${movieId}`, options);
            const data = await response.json();
            // console.log(data);
            setMovie(data);
            // return dat
        };

        // NECESITO HACER LA LOGICA PARA BUSCAR AL DIRECTOR LPMM JAJA
        // const directorOfMovie = async () => {
        //     const response = await fetch(`${API_URL}/person/${}`)
        // };
        const getCreditsOfMovieById = async () => {
            const response = await fetch(`${API_URL}/movie/${movieId}/credits`, options);
            const data = await response.json();
            const dir = data.crew.find(person => person.id == directorId);
            if(dir != undefined){
                setMovieDirector(dir);
            }
            else {
                console.log("NO SE ENCONTRÓ AL DIRECTOR!");
            }
            // console.log(dir);
            // console.log(data.crew);
        };

        fetchMovie();
        getCreditsOfMovieById();
    }, [movieId]);

    return (
        <>
        <div className="bg-purple-200 border-2 border-black rounded-xl flex justify-start">
            <div className="bg-purple-400">
                <img src={`${IMAGE_PATH}/${movie.poster_path}`} alt="" className="w-[16rem] rounded-xl" />
            </div>
            <div className="bg-purple-600 flex flex-col">
                {movie != undefined ? (
                    <>
                        <p>{movie.title} ({getYear(movie.release_date)})</p>
                        <p>Overview: {movie.overview}</p>
                        <p>Directed by: {movieDirector != undefined ? movieDirector.name : 'loading..'}</p>
                    </>
                ) : ''}
            </div>
            {/* {movie != undefined ? (
                <p>{movie.title}</p>
            ) : ''} */}
        </div>
        </>
    )
};