import { useState, useEffect } from 'react';

import MovieCard from '../components/MovieCard';

import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [TopMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl)
    }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores filmes</h2>
            <div className="moviesContainer">
                {TopMovies.length > 0 && TopMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};
export default Home;