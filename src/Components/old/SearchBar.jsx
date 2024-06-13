import React, { useEffect, useState, useContext } from "react";
import { API_URL, options, IMAGE_PATH } from "../constants";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Contexts";

export default function SearchBar() {
    const [searchText, setSearchText] = useState('');
    // const [results, setResults] = useState({});
    const navigate = useNavigate();
    const { searchResults, setSearchResults } = useContext(SearchContext);
    
    const searchHandler = async (e) => {
        let lowercase = e.target.value.toLowerCase();
        await setSearchText(lowercase);
    };

    //función que se ejecuta al hacer click en la lupa
    const searchTheText = async () => {
        let movieResults = await searchSomething('movie');
        let personResults = await searchSomething('person');

        let allResults = {
            people: personResults,
            movies: movieResults
        };

        // console.log(allResults);
        // setResults(allResults);
        setSearchResults(allResults);
        navigate(`/search/:${searchText}`);
    };

    const searchSomething = async (entity) => {
        let response = await fetch(`${API_URL}/search/${entity}?query=${searchText}&include_adult=false&language=en-US`, options);
        let data = await response.json();
        return data;
    };
        
        // useEffect(() => {
        
            // }, []);
            
            return (
        <>
        <div className="bg-green-300 flex justify-end py-3 px-2">
            {/* <div class="flex items-center justify-center p-5">
                <div class="rounded-lg bg-gray-200 p-5"> */}
                    <div className="flex">
                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5 hover:cursor-pointer" onClick={() => searchTheText()}>
                            <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                            </svg>
                        </div>
                        <input type="text" className="w-full min-w-[15rem] bg-white pl-2 text-base font-semibold outline-0 rounded-r-xl px-2" placeholder="Search" id="" value={searchText} onChange={(e) => searchHandler(e)} />
                        {/* <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" /> */}
                    </div>
                {/* </div>
            </div> */}
        </div>
        </>
    )
    };








    
        // const search = async () => {
        //     if(searchText != ''){
        //         let personResults = await searchSomething("person");
        //         let movieResults = await searchSomething("movie");
    
        //         console.log("aca antes de filtrar los directores");
    
        //         // console.log("PERSON RESULTS ⏬");
        //         // console.log(personResults);
    
        //         let directorsFromResults = await filterDirectors(personResults);
        //         let moviesFromResults = await getAllEntitiesFromSearchResults('movie', movieResults);
        //         // console.log(moviesFromResults);
    
        //         let allResults = {
        //             persons: directorsFromResults,
        //             movies: moviesFromResults
        //         };
        //         // console.log("\n\nMOVIES FROM RESULTS ⏬");
        //         // console.log(moviesFromResults);
        //         setResults(allResults);
        //         // console.log(allResults);
        //         setSearchResults(allResults);
        //         console.log("ACA YA SE SETEARON LOS RESULTADOS EN EL ESTADO");
        //         navigate(`/search/:${searchText}`);
        //     }
        // };
    
        // const filterDirectors = async (array) => {
        //     // console.log(`Page: ${array.page}.\nTotal pages: ${array.total_pages}.\nTotal results: ${array.total_results}.`);
        //     let tempArray = await getAllEntitiesFromSearchResults('person', array); //este seria el array de todas las personas que vinieron como resultado.
        //     let filteredArray = tempArray.filter(person => person.known_for_department == 'Directing');
        //     // console.log("ESTOS SON LOS DIRECTORES ⏬");
        //     // console.log(filteredArray);
        //     return filteredArray;
        // };
    
    
        // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    
        // const getAllEntitiesFromSearchResults = async (entity, array) => {
        //     //       MI LOCIGA
        //     // let temp = [];
        //     // for(let i = 1; i <= array.total_pages; i++){
        //     //     if(i > 1){
        //     //         let response = await fetch(`${API_URL}/search/${entity}?query=${searchText}&include_adult=false&language=en-US&page=${i}`, options);
        //     //         let data = await response.json();
    
        //     //         for(let c = 0; c < data.results.length; c++){
        //     //             console.log(`PAGINA NRO ${i}. NRO DE RESULTADOS DE ESTA PAGINA: ${data.results.length}`);
        //     //             temp.push(data.results[c]);
        //     //         }
        //     //     }
        //     //     else {
        //     //         for(let j = 0; j < array.results.length; j++){
        //     //             console.log(`PAGINA NRO ${i}. NRO DE RESULTADOS DE ESTA PAGINA: ${array.results.length}`);
        //     //             temp.push(array.results[j]);
        //     //         }
        //     //     }
        //     // }
    
        //     // let promises = [];
        //     // for(let i = 0; i<= array.total_pages; i++){
        //     //     let promise = fetch(`${API_URL}/search/${entity}?query=${searchText}&include_adult=false&language=en-US&page=${i}`, options)
        //     //         .then(response => response.json())
        //     //         .then(data => data.results);
        //     //     promises.push(promise);
        //     // };
    
        //     // let results = await Promise.all(promises);
        //     // let temp = [].concat(...results);
        //     // console.log("ESTE ES EL ARRAY QUE DEVUELVE LA NUEVA FUNCION ");
        //     // console.log(temp);
    
    
        //     let temp = [];
        //     const delayBetweenRequests = 200; // 200ms delay between requests
        
        //     for(let i = 0; i <= array.total_pages; i++){
        //         await delay(delayBetweenRequests);
        //         let response = await fetch(`${API_URL}/search/${entity}?query=${searchText}&include_adult=false&language=en-US&page=${i}`, options);
        //         let data = await response.json();
        //         temp.push(...data.results);
        //     }
        
        //     console.log("ESTE ES EL ARRAY QUE DEVUELVE LA NUEVA FUNCION ");
        //     console.log(temp);
    
        //     // console.log("ESTE SERIA EL RESULTADO DESPUES DE PASAR POR LA FUNCION getAllEntitiesFromSearchResults ⏬");
        //     // console.log(temp);
        //     return temp;
        // };
    
        // // const filterMovies = async (array) => {
        // //     console.log(`Page: ${array.page}.\nTotal pages: ${array.total_pages}.\nTotal results: ${array.total_results}.`);
    
        // // };
    
        // const searchSomething = async (entity) => {
        //     let response = await fetch(`${API_URL}/search/${entity}?query=${searchText}&include_adult=false&language=en-US`, options);
        //     let data = await response.json();
        //     // console.log(data.results);
        //     return data;
        // };