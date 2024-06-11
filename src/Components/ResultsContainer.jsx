import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DirectorContext, SearchContext } from "../Contexts";
import { API_URL, options } from "../constants";

export default function ResultsContainer() {
    const location = useLocation();
    const { searchResults, setSearchResults } = useContext(SearchContext); //los resultados que vienen del contexto.
    const [selectedType, setSelectedType] = useState('person'); //el tipo de resultado seleccionado: person(Directores) y movie(Peliculas).
    const [actualPage, setActualPage] = useState(1); //la página actual (que es modificada mediante los numeros de las págionas abajo de todo).
    const [actualResults, setActualResults] = useState({}); //los resultados que debo mostrar (van a estar determinados por actualPage y selectedType).
    // const [actualSearch, setActualSearch] = useState('');
    // const [selectedResults]

    const handleClick = (buttonType) => {
        if (selectedType != buttonType) {
            setSelectedType(buttonType);
        };
    };

    const getAllDirectorsFromResults = async (array) => {
        let temp = [];

        for (let i = 0; i < array.results.length; i++) {
            if (array.results[i].known_for_department == 'Directing') {
                temp.push(array.results[i]);
            };
        };

        return temp;
    };

    useEffect(() => {
        const fetchThings = async () => {
            const response = await fetch(`${API_URL}/search/${selectedType}?query=${location.pathname.split('/:')[1]}&include_adult=false&language=en-US&page=${actualPage}`, options);
            const data = await response.json();
            if (selectedType == 'person') {
                let temp = await getAllDirectorsFromResults(data);
                setActualResults(temp);
            }
            else {
                setActualResults(data);
            }
            console.log(actualResults);
            // console.log(`${API_URL}/search/${selectedType}?query=${location.pathname.split('/:')[1]}&include_adult=false&language=en-US&page=${actualPage}`);
            // console.log("Data ⏬");
            // console.log(data);
            // setActualPage(data);
            // // console.log(location.pathname.split('/:')[1]);
            // console.log("Actual page: " + actualPage);
            // console.log(searchResults);
        };

        fetchThings();
    }, [actualPage, searchResults, selectedType]);

    useEffect(() => {}, []);

    return (
        <>
            {/* <p>Este es el results container</p> */}
            {/* {console.log(typeof searchResults)} */}
            {/* {console.log(searchResults)} */}
            <div className="bg-red-200 mx-2">
                <div className="flex gap-x-5">
                    <button onClick={() => handleClick('person')} className="rounded-xl text-xl text-center border-2 border-black py-1 px-3 hover:bg-green-200 hover:cursor-pointer">Directors</button>
                    <button onClick={() => handleClick('movie')} className="rounded-xl text-xl text-center border-2 border-black py-1 px-3 hover:bg-green-200 hover:cursor-pointer">Movies</button>
                </div>

                <div className="bg-red-400 mx-2 flex flex-col">
                    {actualResults.results != undefined && actualResults.results.map((result, i) => {
                        {
                            selectedType == 'person'(
                                <div key={result.name + i} className="bg-blue-300 border-2 border-black">
                                    <p>{result.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                {/* //aca falte hacer la logica para mostrar de forma dinámica los numeros del paginado */}
                <div>
                    <p onClick={() => setActualPage(1)}>1</p>
                    <p onClick={() => setActualPage(2)}>2</p>
                    <p onClick={() => setActualPage(3)}>3</p>
                </div>
                {/* <div>
                {selectedType == 'Directors' ? (
                    <div className="bg-blue-400 flex flex-col">
                        {searchResults.persons.map((p, i) => {
                            <div key={p.}></div>
                        })}
                    </div>
                ) : (
                    <p>Movies</p>
                )}
            </div> */}
            </div>
        </>
    )
};