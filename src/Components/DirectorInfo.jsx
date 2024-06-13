import React, { useEffect, useState, useContext } from "react";
import { API_KEY, API_URL, IMAGE_PATH, options } from '../constants';
import { DirectorContext } from "../Contexts";
export default function DirectorInfo() {
    const [director, setDirector] = useState({});
    const { directorId, setDirectorId } = useContext(DirectorContext);
    const [showFullBio, setShowFullBio] = useState(false);

    const toggleBio = () => {
        setShowFullBio(!showFullBio);
    };

    useEffect(() => {
        fetch(`${API_URL}/person/${directorId != 0 ? directorId : 309}`, options)
            .then(response => response.json())
            .then(response => setDirector(response))
    }, [directorId]);

    // const countLetters = (text) => {
    //     let array = text.;
    //     let sum = 0;
    //     for(let i = 0; i <= array.length; i++){
    //         sum++;
    //     }
    //     return sum;
    // };

    return (
        <>
            {director != undefined ? (
                <div className="">
                <p className="lg:text-8xl text-center">{director.name}</p>
                {director.biography != undefined && (
                    <>
                    <p className="lg:text-[1.5rem] lg:leading-10 mt-4">
                        {showFullBio || director.biography.length <= 1000
                            ? director.biography
                            : director.biography.substring(0, 1000) + '...'}
                    </p>
                    {director.biography.length > 1000 && (
                        <button onClick={toggleBio} className="font-bold text-[#2a5ac3] lg:text-[1.5rem] lg:leading-10">
                            {showFullBio ? 'See less >' : 'See more >'}
                        </button>
                    )}
                    </>
                )}
            </div>
            ) : ''}
        </>
    )
};