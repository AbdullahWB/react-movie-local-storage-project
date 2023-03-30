import React from 'react';

const SingleCard = (movie) => {
    return (
        <div className="movie-card card text-center w-100 aa-auto">
            <div className="movie-poster w-25 m-auto">
                <img className='w-75' src={movie.movie.poster} alt="" />
            </div>
            <h3>{movie.movie.movieName}</h3>
            <p>{movie.movie.description}</p>
            <div className="timeAndRating d-flex justify-content-around">
                <p>WatchTime: {movie.movie.watchTime}</p>
                <p>Rating: {movie.movie.imdbRating}</p>
            </div>
            <button className='btn btn-info w-75 m-auto'>Book now</button>
        </div>
    );
};

export default SingleCard;