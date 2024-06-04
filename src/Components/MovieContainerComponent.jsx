import { useParams } from "react-router-dom"

export default function MovieContainerComponent () {
    const { movieId } = useParams();

    return (
        <p>{movieId}</p>
        //ya me llega el id por la ruta. Tengo que hacer un fetch de movie/details para mostrar su información.
        //Tengo que mostrar los componentes Navbar, SearchBar, MovieContainer y Footer.
        //Despues tengo que mostrar el componente MovieContainer (con un texto encima que diga Otras peliculas del director). Tambien tengo que modificar MovieContainer para que pueda recibir un texto por parametro, tipo para que diga "Otras peliculas de David Lynch" o "Peliculas".
        //Despues tengo que mostrar el componente Footer
    )
};