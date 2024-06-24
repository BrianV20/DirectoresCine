import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <div className="bg-white text-blue-800 font-bold py-3 ml-4">
            <p onClick={() => navigate('/')} className="inline-block text-3xl lg:text-5xl cursor-pointer hover:underline">Directores de cine</p>
            <p className="inline-block text-xl lg:text-2xl ml-2">(un par que me gustan nomás)</p>
        </div>
    );
};