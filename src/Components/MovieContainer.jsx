import React, { useState, useContext, useEffect } from "react";
import { API_KEY, API_URL, IMAGE_PATH, options } from '../constants';
import { DirectorContext } from "../Contexts";
import Movie from "./Movie";
import { useLocation } from "react-router-dom";


export default function MovieContainer({ aboveText }) {
    const [movieInfo, setMovieInfo] = useState({});
    const { directorId, setDirectorId } = useContext(DirectorContext);
    const [directorObject, setDirectorObject] = useState({});
    const [movieCredits, setMovieCredits] = useState([]);
    const [directedMovies, setDirectedMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        //Esta función trae la información de cada trabajo que se hizo en las peliculas en las que colaboró el director.
        const fetchCreditsByMovie = async (movies) => {
            const newarray = await movies.filter(mov => mov.id != undefined);
            // const newarray = [...movies].filter(mov => mov.id != undefined);
            const arrayOfMovies = [];
            // console.log(newarray);
            for (let i = 0; i < newarray.length; i++) {
                if (newarray[i] != undefined) {
                    const response = await fetch(`${API_URL}/movie/${newarray[i].id}/credits`, options);
                    const data = await response.json();
                    arrayOfMovies.push(data);
                }
                // console.log(`Peli nro: ${i}.\nId: ${movies[i].id}.\nTitulo: ${movies[i].title}`);
            }
            // console.log("El array of movies: " + arrayOfMovies.length);
            return arrayOfMovies;
        };

        //función que devuelve la información del trabajo que hizo el director en las peliculas en las que él trabajó.
        const filterTheOnesDirectedByTheDirector = async () => {
            let movies = await fetchCreditsByMovie(movieCredits);
            let prueba = [];
            for (let i = 0; i < movies.length; i++) {
                for (let j = 0; j < movies[i].crew.length; j++) {
                    if (movies[i].crew[j] != undefined) {
                        if (movies[i].crew[j].id == directorId) {
                            if (movies[i].crew[j].known_for_department == "Directing") {
                                if (movies[i].crew[j].job) {
                                    if (movies[i].crew[j].job == "Director") {
                                        prueba.push({
                                            idOfMovie: movies[i].id,
                                            infoOfDirectorRole: movies[i].crew[j]
                                        });
                                        // console.log(movies[i].id);
                                        // console.log("Id pelicula: " + movies[i].id + "\n" + movies[i].crew[j]);
                                        // console.log(`Id pelicula: ${movies[i].id}.\nNombre persona: ${movies[i].crew[j].name}.\nknown_for_department: ${movies[i].crew[j].known_for_department}.\nJob: ${movies[i].crew[j].job}`);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //funcion para filtrar las pelis únicas (porque si bien ya se hace de forma no intencional en el for anterior, alguna se puede escapar).
            const uniqueArray = prueba.reduce((acc, current) => {
                const x = acc.find(item => item.idOfMovie === current.idOfMovie);
                if (!x) {
                    return acc.concat([current]);
                } else {
                    return acc;
                }
            }, []);
            return uniqueArray;
        };

        //Función que se va a encargar de traer la informacion de las peliculas ya filtradas con filterTheOnesDirectedByTheDirector en base a la propiedad idOfMovie de cada objeto.
        const getInfoOfFilteredMovies = async () => {
            let arrayOfMovies = await filterTheOnesDirectedByTheDirector();
            let infoOfFilteredMovies = [];
            for (let i = 0; i < arrayOfMovies.length; i++) {
                const response = await fetch(`${API_URL}/movie/${arrayOfMovies[i].idOfMovie}`, options)
                const data = await response.json();
                infoOfFilteredMovies.push(data);
            }
            // console.log(infoOfFilteredMovies);
            setDirectedMovies(infoOfFilteredMovies);
        };

        getInfoOfFilteredMovies();
    }, [movieCredits]);

    useEffect(() => {
        //Esta funcion trae las pelis en las que trabajó el director.
        const fetchMovieCredits = async () => {
            setMovieCredits([]);
            let arrayOfRemarcableFilms = [];
            const response = await fetch(`${API_URL}/person/${directorId}/movie_credits`, options);
            const data = await response.json();
            for (let i = 0; i < data.crew.length; i++) {
                // console.log("Peli id:" + data.crew[i].id + "\nPopularity: " + Number(data.crew[i].popularity));
                if (Number(data.crew[i].popularity) > 5) {
                    arrayOfRemarcableFilms.push(data.crew[i]);
                    // console.log("Peli id:" + data.crew[i].id + "\nPopularity: " + Number(data.crew[i].popularity));
                }
            }
            // let ard = ["1", "2", "3"];
            // for(let i = 0; i < ard.length; i++){
            //     console.log("NUMERO: " + ard[i]);
            // }
            setMovieCredits(arrayOfRemarcableFilms);
            getTheDirector();
            // setMovieCredits(data.crew);
            // console.log(data.crew);
            // console.log(movieCredits);
        };

        const getTheDirector = async () => {
            const response = await fetch(`${API_URL}/person/${directorId}`, options);
            const data = await response.json();
            setDirectorObject(data);
        };
        fetchMovieCredits();
    }, [directorId]);

    return (
        <>
            {(location.pathname.toString()).includes('movie') ? (
                <p className="text-2xl">More movies by {directorObject.name}:</p>
            ) : (
                <p className="text-2xl">Movies</p>
            )}
            {/* <p className="text-2xl">{console.log(location.pathname)}</p> */}
            {directedMovies.length > 0 ? (
                <div className="flex rounded-lg overflow-auto gap-x-[1rem]">
                    {directedMovies.map((movie, i) => {
                        return (
                            <div key={movie.title + i}>
                                {movie.poster_path != undefined ? (
                                    <Movie movieInfo={{
                                        id: movie.id,
                                        title: movie.title,
                                        year: movie.release_date,
                                        posterPath: movie.poster_path
                                    }} />
                                ) : ''}
                            </div>
                            // <div className="flex flex-col border-solid border-black p-1 mx-2 my-4 border-2" key={movie.title + i}>
                            //     <p>Id: {movie.id}.</p>
                            //     <p>Titulo: {movie.title}</p>
                            // </div>
                        )
                    })}
                </div>
            ) : 'loading movies...'}
            {/* {console.log(movieCredits)} */}
            {/* <button onClick={() => setDirectorId(309)}>
                Id 309
            </button>
            <button onClick={() => setDirectorId(403)}>
                Id 403
            </button> */}
            {/* <h2>El id del director es: {directorId}</h2> */}
        </>
    )
};