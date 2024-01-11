import "../styles/pages/movie.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFileEarmarkTextFill } from 'react-icons/bs';

import { api, apiKey } from "../api/api";
import MovieProps from "../interfaces/movie";
import MovieCard from "../components/movieCard";

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState<MovieProps>();


    useEffect(() => {

        api.get(`${id}?${apiKey}`)
            .then((res) => setMovie(res.data))
            .catch((error) => console.error("Ocorreu um erro ao buscar o filme", error))

    }, [id]);


    const formatCurrency = (number: number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }


    return (
        <div className="movie_page">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />

                    <p className="tagline"> {movie.tagline} </p>

                    <div className="info">
                        <h3> <BsWallet2 /> Orçamento: </h3>
                        <p> {formatCurrency(movie.budget)} </p>
                    </div>

                    <div className="info">
                        <h3> <BsGraphUp /> Receita: </h3>
                        <p> {formatCurrency(movie.revenue)} </p>
                    </div>

                    <div className="info">
                        <h3> <BsHourglassSplit /> Duração: </h3>
                        <p> {movie.runtime} minutos </p>
                    </div>

                    <div className="info description">
                        <h3> <BsFileEarmarkTextFill /> Descrição: </h3>
                        <p> {movie.overview} </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default Movie