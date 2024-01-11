export interface GenresProps {
    id: number
    name: string
}

export interface ProductionCompaniesProps {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

export interface ProductionCountriesProps {
    iso_3166_1: string
    name: string
}

export interface SpokenlanguagesProps {
    english_name: string
    iso_639_1: string
    name: string
}

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
    belongs_to_collection: string
    budget: number
    genres: GenresProps[]
    homepage: string
    imdb_id: string
    production_companies: ProductionCompaniesProps[]
    production_countries: ProductionCountriesProps[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenlanguagesProps[]
    status: string
    tagline: string
}