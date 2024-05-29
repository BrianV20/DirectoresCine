import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [prueba, setPrueba] = useState();

  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "477f4d6529b7a1d0aa06d64e646724c4";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original"

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzdmNGQ2NTI5YjdhMWQwYWEwNmQ2NGU2NDY3MjRjNCIsInN1YiI6IjY2NDNlYjJlNjE3MTMyYTVhZjJiNTI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.47o2FD4djkORpW-_r3CYi7_x9q7BPfo6BI1iXIP38BI'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/4307', options)
  .then(response => response.json())
  .then(response => setPrueba(response))
  .catch(err => console.error(err))
}, []);

  return (
    <>
    {prueba != undefined ? (
      <>
        {console.log("PRUEBAA: " + (IMAGE_PATH + prueba.poster_path))}
        <img src={`${IMAGE_PATH + prueba.poster_path}`} alt="" />
      </>
    ) : ''}
    </>
  )
}

export default App