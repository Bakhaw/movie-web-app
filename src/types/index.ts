export interface ApiResponseList<T> {
  page: number;
  results: T[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  backdrop_path?: string;
  genres: Genre[];
  homepage: string;
  id: number;
  original_language: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  runtime?: number;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
}

export interface TV {
  backdrop_path?: string;
  id: number;
  genres: Genre[];
  name: string;
  overview: string;
  poster_path: string;
  popularity?: number;
  vote_average?: number;
  vote_count?: number;
}

export enum DataSourceType {
  tv = "tv",
  movie = "movie",
}

export enum TimeWindow {
  day = "day",
  week = "week",
}
