import { useState, useEffect, createContext } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import DirectorInfo from './Components/DirectorInfo';
import { DirectorContext } from './Contexts';
import Movie from './Components/Movie';

function App() {
  // const [prueba, setPrueba] = useState();
  const [directorId, setDirectorId] = useState(309);

//   useEffect(() => {
//     fetch('https://api.themoviedb.org/3/movie/4307', options)
//   .then(response => response.json())
//   .then(response => setPrueba(response))
//   .catch(err => console.error(err))
// }, []);

  return (
    <>
    <div className='bg-blue-300 p-4 mx-2 my-5'>
      <button onClick={() => setDirectorId(309)}>
        Id 309
      </button>
      <button onClick={() => setDirectorId(403)}>
        Id 403
      </button>
    </div>
    <SearchBar />
    <DirectorContext.Provider value={{directorId, setDirectorId}}>
      <div className='CONTENEDOR DE LAS COSAS PARA PONER EL FONDO DE LA IMAGEN DEL DIRECTOR'>
        <DirectorInfo />
        <Movie />
      </div>
    </DirectorContext.Provider>
    {/* {prueba != undefined ? (
      <>
        {console.log("PRUEBAA: " + (IMAGE_PATH + prueba.poster_path))}
        <img src={`${IMAGE_PATH + prueba.poster_path}`} alt="" />
      </>
    ) : ''} */}
    </>
  )
}

export default App