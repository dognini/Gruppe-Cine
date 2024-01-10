import { FaStar } from "react-icons/fa"

import { imageUrl } from "../api/api"
import MovieProps from "../interfaces/movie"
import { Link } from "react-router-dom"

interface MovieCardProps {
    movie: MovieProps
    showLink: boolean
}

const MovieCard = ({ movie, showLink }: MovieCardProps) => {
    return (
        <div className="movie_card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2> {movie.title} </h2>

            <p>
                <FaStar /> {movie.vote_average}
            </p>

            {showLink && <Link to={`/movie/${movie.id}`}> Detalhes </Link>}
        </div>
    )
}

export default MovieCard