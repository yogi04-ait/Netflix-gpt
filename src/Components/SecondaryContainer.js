import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    <div className='bg-black'>
    <div className='-mt-16 relative z-20 text-white'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.upComingMovies} />  
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />

    </div>
    </div>
  )
}

export default SecondaryContainer