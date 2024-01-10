export default interface MovieProps {
    id: number
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_data: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}