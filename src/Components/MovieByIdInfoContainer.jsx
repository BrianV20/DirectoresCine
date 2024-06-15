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
            if (dir != undefined) {
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
            <div className="rounded-xl flex justify-start mb-[2rem]">
                <img src={`${IMAGE_PATH}/${movie.poster_path}`} alt="" className="lg:w-[18rem] lg:max-h-[25rem] lg:mr-[2rem] rounded-3xl min-w-[8rem] max-h-[12rem] mr-[0.5rem]" />
                <div className="flex flex-col gap-y-5 max-w-[60%]">
                    {movie != undefined ? (
                        <>
                            <p className="lg:text-4xl text-3xl">{movie.title} ({getYear(movie.release_date)})</p>
                            {/* <p className="text-xl">Overview: {movie.overview}</p> */}
                            <div className="text-xl">
                                <p className="font-semibold">Overview:</p>
                                <p>{movie.overview}</p>
                            </div>
                            {/* <p className="text-xl">Directed by: {movieDirector != undefined ? movieDirector.name : 'loading..'}</p> */}
                            <div className="text-xl">
                                <p className="font-semibold">Directed by:</p>
                                <p>{movieDirector != undefined ? movieDirector.name : 'loading..'}</p>
                            </div>
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