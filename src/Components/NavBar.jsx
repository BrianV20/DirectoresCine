import { useNavigate } from "react-router-dom"

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <>
            <div className="bg-blue-950 text-white text-3xl text-center py-2">
                <p onClick={() => navigate('/')}>Esta es la navbar</p>
            </div>
        </>
    )
};