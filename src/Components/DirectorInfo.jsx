import React, { useEffect, useState, useContext } from "react";
import { API_KEY, API_URL, IMAGE_PATH, options } from '../constants';
import { DirectorContext } from "../Contexts";
export default function DirectorInfo() {
    const [director, setDirector] = useState({});
    const { directorId, setDirectorId } = useContext(DirectorContext);
    const [showFullBio, setShowFullBio] = useState(false);
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        const getDirector = async () => {
            const response = await fetch(`${API_URL}/person/${directorId}/images`, options);
            const data = await response.json();
            // console.log(data.profiles);
            setProfiles(data.profiles);
        };

        getDirector();
    }, [directorId]);

    const toggleBio = () => {
        setShowFullBio(!showFullBio);
    };

    useEffect(() => {
        fetch(`${API_URL}/person/${directorId != 0 ? directorId : 309}`, options)
            .then(response => response.json())
            .then(response => setDirector(response))
            .then(response => console.log(response))
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
    {director !== undefined ? (
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <img 
                src={profiles.length > 1 ? `${IMAGE_PATH}/${profiles[0].file_path}` : ''} 
                alt={director.name} 
                className="rounded-3xl w-32 lg:w-72 max-h-48 lg:max-h-96 mr-2 lg:mr-8 mb-4 lg:mb-0 object-cover" 
            />

            <div className="flex flex-col">
                <p className="text-3xl lg:text-6xl font-semibold">{director.name}</p>
                {director.biography !== undefined && (
                    <>
                        <p className="text-base lg:text-xl leading-normal lg:leading-relaxed mt-4">
                            {showFullBio || director.biography.length <= 1000
                                ? director.biography
                                : `${director.biography.substring(0, 1000)}...`}
                        </p>
                        {director.biography.length > 1000 && (
                            <button 
                                onClick={toggleBio} 
                                className="mt-4 text-blue-600 font-bold text-lg hover:text-blue-800 transition-colors duration-300"
                            >
                                {showFullBio ? 'See less >' : 'See more >'}
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    ) : (
        <p>No director information available.</p>
    )}
</>
    )
};