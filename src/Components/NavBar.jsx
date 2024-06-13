import { useNavigate } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-[#FFF] lg:text-5xl ml-4 py-3 text-[#2a5ac3] font-bold">
                <p onClick={() => navigate('/')} className="inline-block">Directores de cine</p>
                <p className="inline-block lg:text-2xl ml-2">(un par que me gustan nomás)</p>
            </div>
        </>
    )
};