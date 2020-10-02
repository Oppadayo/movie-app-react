import React, { useEffect, useState } from 'react';

import Movie from './components/Movie'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=cec10ecab8ad0684310ec83287fe711a&language=pt-BR&sort_by=popularity.desc&page=1'

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=cec10ecab8ad0684310ec83287fe711a&language=pt-BR&query='

function App() {

  const [ movies, setMovies ] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
     getMovies(API_URL)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data)=> {
      setMovies(data.results)
    })   
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault()      
    
    if(searchItem){
        getMovies(SEARCH_API + searchItem)          
        
        setSearchItem('')
    } 
}

const handleOnChange = (e) =>{
    setSearchItem(e.target.value)
}


  return (
    <>
      <header>
            <form onSubmit={handleOnSubmit}>
                <input className="search" id="search" type="search" value={searchItem} onChange={handleOnChange} placeholder="Pesquisar"/>
            </form>
        </header>
      <div className="movie-container">
      {movies.length > 0 && movies.map((movie) =>(
        <Movie key={movie.id} {...movie}/>
      ))}
      </div>'
    </>
  )
}

export default App;
