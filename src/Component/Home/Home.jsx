import React, { useState } from 'react';
import { useEffect } from "react";
import SingleCard from '../SingleCard/SinglaeCard';

const Home = ({ handleWatchTime }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map((movie) => <SingleCard
                        handleWatchTime={handleWatchTime}
                        movie={movie}
                        key={movie.id}
                    ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;