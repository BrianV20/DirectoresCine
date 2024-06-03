import { useState, useEffect, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './Components/SearchBar';
import DirectorInfo from './Components/DirectorInfo';
import { DirectorContext } from './Contexts';
import Movie from './Components/Movie';
import DirectorContainerComponent from './Components/DirectorContainerComponent';
import MovieContainerComponent from './Components/MovieContainerComponent';
import SearchContainerComponent from './Components/SearchContainerComponent';

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
    <div>
      <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='director/directorId' element={<DirectorContainerComponent />} /> DirectorContainerComponent
        <Route path='movie/movieId' element={<MovieContainerComponent />} /> MovieContainerComponent
        <Route path='search/searchText' element={<SearchContainerComponent />} /> SearchContainerComponent
      </Routes>
      <SearchBar />
      <DirectorContext.Provider value={{directorId, setDirectorId}}>
        <div className='CONTENEDOR DE LAS COSAS PARA PONER EL FONDO DE LA IMAGEN DEL DIRECTOR'>
          <DirectorInfo />
          <Movie />
        </div>
      </DirectorContext.Provider>
    </div>
  )
}

export default App