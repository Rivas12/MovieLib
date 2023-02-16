import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");

    const [Movies, setMovie] = useState([]);

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data.results);
    };

    useEffect(() => {
        const searchWithQueryUrl = `${searchURL}?${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryUrl);
    }, [query]);

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="moviesContainer">
                {Movies.length > 0 && Movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};
export default Search;
