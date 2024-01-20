import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    if (!movies) return
    console.log(movies)
    return (
        <div className='px-6'>
            <h1 className='text-3xl font-semiboldbold p-4'>{title}</h1>
            <div className='flex p-5 flex-row  overflow-x-scroll no-scrollbar overflow-y-auto'>
                <div className='flex flex-row gap-4'>
                    {movies.map(movie => <MovieCard posterPath={movie.poster_path} />)}
                </div>
            </div>
        </div>
    )
}

export default MovieList