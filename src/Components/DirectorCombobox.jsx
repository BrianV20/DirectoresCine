import React, { useContext } from "react";
import { DirectorContext } from "../Contexts";

export default function DirectorCombobox(){
    const { directorId, setDirectorId } = useContext(DirectorContext);

    const handleChange = (e) => {
        console.log(e.target.value);
        if(directorId != e.target.value){
            setDirectorId(e.target.value);
            console.log("se seteo");
        }
    };

    return (
        <div className="flex justify-end lg:text-2xl">
            <div className="bg-[#5e2569] w-fit px-4 py-2 rounded-md">
                <div className="flex justify-end mr-2">
                    <p className="mr-1 text-white">Selected director:</p>
                    <select name="" id="" onChange={handleChange}className="bg-gray-100 border-2 border-black font-mono">
                        <option value="309">Pedro Almodóvar</option>
                        <option value="5602">David Lynch</option>
                        {/* <option value="57607">Stephen Chow</option> */}
                        <option value="21684">Bong Joon-Ho</option>
                        <option value="1223">Joel Coen</option>
                        <option value="69081">Kim Jee-Woon</option>
                        <option value="1769">Sofia Coppola</option>
                        <option value="240">Stanley Kubrick</option>
                    </select>
                </div>
            </div>
        </div>
    )
};