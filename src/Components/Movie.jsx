import { IMAGE_PATH } from "../constants"
import { Link } from "react-router-dom"
import { getYear } from "../Utils"

export default function Movie({ movieInfo }) {
    // let movieInfo = props.movieInfo
    return (
        <>
            <Link to={`/movie/${movieInfo.id}`}>
                <div className="my-4 lg:w-[10rem] flex flex-col text-center flex-nowrap lg:h-[16rem]">
                    {/* <p>Id: {movieInfo.id}</p> */}
                    <img src={`${IMAGE_PATH}/${movieInfo.posterPath}`} alt={movieInfo.title + ' cover'} className="lg:w-[8rem] lg:h-[12.5rem] mx-auto rounded-md" />
                    {movieInfo.title.length > 30 ? (
                        <p className="inline-block">{movieInfo.title.substring(0, 30) + '...'} ({getYear(movieInfo.year)})</p>
                    ) : <p className="inline-block">{movieInfo.title} ({getYear(movieInfo.year)})</p>}
                </div>
            </Link>
        </>
    )
};