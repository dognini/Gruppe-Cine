import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieProps from "../interfaces/movie";
import MovieCard from "../components/movieCard";
import { api, apiKey, search } from "../api/api";

function Search() {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState<MovieProps[]>([]);

    const query = searchParams.get("q");

    useEffect(() => {
        api.get(`${search}?${apiKey}&query=${query}`)
            .then((res) => setMovies(res.data.results))
            .catch((error) => console.error("Ocorreu um erro ao buscar os filmes", error))
    }, [query])

    return (
        <div className="container">
            <h2 className="title">Resultados para: <span className="query_text"> {query} </span> </h2>

            <div className="movies_container">
                {movies.length === 0 && <p> Carregando... </p>}
                {movies.length > 0 && movies.map((movie) => <MovieCard movie={movie} showLink={true} key={movie.id} />)}
            </div>
        </div>
    )
}

export default Search;