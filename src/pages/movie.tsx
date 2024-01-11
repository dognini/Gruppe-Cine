import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import MovieProps from "../interfaces/movie";
import { api, apiKey } from "../api/api";

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState<MovieProps>();

    useEffect(() => {
        api.get(`${id}?${apiKey}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.error("Ocorreu um erro ao buscar o filme", error))
    }, [id])

    return (
        <h2> {movie?.title} </h2>
    )
}

export default Movie