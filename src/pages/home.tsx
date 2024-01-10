import "../styles/pages/movieGrid.css"

import { useEffect, useState } from "react"

import { api, apiKey } from "../api/api"
import MovieProps from "../interfaces/movie"
import MovieCard from "../components/movieCard";

function Home() {
    const [topMovies, setTopMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        api.get(`top_rated?${apiKey}`)
            .then((res) => setTopMovies(res.data.results))
            .catch((error) => console.error("Ocorreu um erro ao buscar os melhores filmes", error))
    }, [])

    return (
        <div className="container">
            <h2 className="title"> Melhores  Filmes: </h2>

            <div className="movies_container">
                {topMovies.length === 0 && <p> Carregando... </p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} showLink={true} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home