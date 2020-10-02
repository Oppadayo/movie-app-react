import React from 'react';
import './movie.css'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/'

const setVoteColor = (vote) =>{
    if(vote >= 8){
        return 'green'
    } else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}

const Movie = ({poster_path, title, vote_average, overview}) => (
        
        <div className="movie">
            <img src={poster_path ? (IMG_PATH + poster_path) : 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'} alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={setVoteColor(vote_average)}>{vote_average}</span>
            </div>

            <div className="overview">
                <h2>Sinopse:</h2>
                <p>{overview}</p>
            </div>
        </div>
    
)


export default Movie