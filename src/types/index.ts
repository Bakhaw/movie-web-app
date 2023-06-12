export interface ApiResponseList<T> {
  page: number;
  results: T[];
}

interface Genre {
  id: number;
  name: string;
}

interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface TV {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  id: string;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
}

export enum DataSourceType {
  tv = "tv",
  movie = "movie",
}

export enum TimeWindow {
  day = "day",
  week = "week",
}
