import { IMAGE_PATH } from "../constants"
import { Link } from "react-router-dom"

export default function Movie({ movieInfo }) {
    // let movieInfo = props.movieInfo
    return (
        <>
        <Link to={`/movie/${movieInfo.id}`}>
            <div className="flex flex-col border-solid border-black p-1 mx-2 my-4 border-2">
                <p>Id: {movieInfo.id}</p>
                <p>Titulo: {movieInfo.title}</p>
                <p>Fecha de lanzamiento: {movieInfo.year}</p>
                <img src={`${IMAGE_PATH}/${movieInfo.posterPath}`} alt="" className="w-[7rem]" />
            </div>
        </Link>
        </>
    )
};