import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DirectorContext, SearchContext } from "../Contexts";

export default function ResultsContainer() {
    const location = useLocation();
    const { searchResults, setSearchResults } = useContext(SearchContext);
    const [selectedType, setSelectedType] = useState('Directors');
    // const [selectedResults]

    const handleClick = (buttonType) => {
        if(selectedType != buttonType){
            selectedType(buttonType);
        };
    };

    // useEffect

    return (
        <>
        {/* <p>Este es el results container</p> */}
        {console.log(searchResults)}
        <div className="bg-red-200 mx-2 flex gap-x-5">
            <button onClick={() => handleClick('Directors')} className="rounded-xl text-xl text-center border-2 border-black py-1 px-3 hover:bg-green-200 hover:cursor-pointer">Directors</button>
            <button onClick={() => handleClick('Movies')} className="rounded-xl text-xl text-center border-2 border-black py-1 px-3 hover:bg-green-200 hover:cursor-pointer">Movies</button>
        </div>

        <div>ACA MOSTRARIA LOS RESULTADOS, POR DEFECTO MOSTRARÉ LOS DIRECTORES PERO SI SE HACE CLICK EN MOVIES SE MOSTRARÁN LAS MOVIES.</div>
        </>
    )
};