import React from 'react';
import { movie } from "../constants/movie_genre";

export const getGenre = (genre_ids) => {
  let selectedMovieGenre = [];
  movie.genres.map((data, index) => {
    if (genre_ids.includes(data.id)) {
      selectedMovieGenre.push(data)
    }
  })
  return selectedMovieGenre;
}