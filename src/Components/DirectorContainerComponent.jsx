import { useState, useEffect, createContext, useContext } from "react";
import React from "react";
import { DirectorContext } from "../Contexts";
import DirectorInfo from './DirectorInfo';
// import Movie from "./MovieContainer";
// import SearchBar from "./SearchBar";
import MovieContainer from "./MovieContainer";
import NavBar from "./NavBar";
import DirectorCombobox from "./DirectorCombobox";
import { API_URL, options, IMAGE_PATH } from "../constants";

export default function DirectorContainerComponent() {
    // const { directorId, setDirectorId } = useContext(DirectorContext);
    // const [profiles, setProfiles] = useState([]);

    // useEffect(() => {
    //     const getDirector = async () => {
    //         const response = await fetch(`${API_URL}/person/${directorId}/images`, options);
    //         const data = await response.json();
    //         console.log(data.profiles);
    //         setProfiles(data.profiles);
    //     };

    //     getDirector();
    // }, [directorId]);

    return (
        <>
            <NavBar />
            {/* <SearchBar /> */}
            {/* {profiles.length > 1 && console.log("RUTA DE LA IMAGEN: " + `${IMAGE_PATH}${profiles[0].file_path}`)} */}
            {/* <div className={'aca va a ir la foto del director supongo border-2 border-red-500 lg:mx-[12rem]' + {data.profiles.length > 1}}> */}
            {/* <div className={profiles != undefined && profiles.length > 1 ? `border-2 border-red-500 lg:mx-[12rem] bg-[url(${IMAGE_PATH}${profiles[1].file_path})]` : 'border-2 border-blue-500'}> */}
            {/* <div
                style={{
                    backgroundImage: `url(${IMAGE_PATH}${profiles[0].file_path})`,
                    backgroundSize: 'cover',      // Cover the entire area
                    backgroundPosition: 'center', // Center the image
                    backgroundRepeat: 'no-repeat' // Do not repeat the image
                }}
                className="border-2 border-red-500 lg:mx-[12rem]"
            > */}
            <div className="lg:mx-[12rem] mt-[1rem] mx-[0.5rem]">
                {/* {profiles.length > 1 && console.log(`bg-[url(${IMAGE_PATH}${profiles[1].file_path})]`)} */}
                <DirectorCombobox />
                <DirectorInfo />
                <MovieContainer />
            </div>
        </>
    )
};