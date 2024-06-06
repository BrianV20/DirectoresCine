import React, { useEffect, useState, useContext } from "react";
import { API_KEY, API_URL, IMAGE_PATH, options } from '../constants';
import { DirectorContext } from "../Contexts";
export default function DirectorInfo() {
    const [director, setDirector] = useState({});
    const { directorId, setDirectorId } = useContext(DirectorContext);

    useEffect(() => {
        fetch(`${API_URL}/person/${directorId != 0 ? directorId : 309}`, options)
        .then(response => response.json())
        .then(response => setDirector(response))
    }, []);

    return (
        <>
        {director != undefined ? (
            <div className="bg-red-200">
                <p className="text-8xl text-center">{director.name}</p>
                <p className="">{director.biography}</p>
            </div>
        ) : ''}
        </>
    )
};