import React, { useEffect, useState } from "react";
import { API_URL, options, IMAGE_PATH } from "../constants";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const search = async () => {
        if(searchText != ''){
            let personResults = await searchSomething("person");
            let movieResults = await searchSomething("movie");
            let allResults = {
                persons: personResults,
                movies: movieResults
            };
            setResults(allResults);
            console.log(allResults);
            navigate(`/search/:${searchText}`);
        }
    };

    const searchSomething = async (entity) => {
        let response = await fetch(`${API_URL}/search/${entity}?query=${searchText}`, options);
        let data = await response.json();
        // console.log(data.results);
        return data;
    };

    const searchHandler = async (e) => {
        let lowercase = e.target.value.toLowerCase();
        setSearchText(lowercase);
    };

    // useEffect(() => {
        
    // }, []);

    return (
        <>
        <div className="bg-green-300 flex justify-end py-3 px-2">
            {/* <div class="flex items-center justify-center p-5">
                <div class="rounded-lg bg-gray-200 p-5"> */}
                    <div className="flex">
                        <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5 hover:cursor-pointer" onClick={() => search()}>
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