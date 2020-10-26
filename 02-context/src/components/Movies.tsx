import React, { FC, useContext, useEffect } from 'react';
import { MyContext } from '../store';
import Movie from './Movie';
import spinner from '../assets/ajax-loader.gif';
import axios from 'axios';

const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

const Movies: FC = () => {
  const { state, dispatch } = useContext(MyContext);
  const { movies, errorMessage, loading } = state;

  useEffect(() => {
    axios.get(MOVIE_API_URL).then((jsonResponse) => {
      dispatch({
        type: 'SEARCH_MOVIES_SUCCESS',
        movies: jsonResponse.data.Search,
      });
    });
  }, [dispatch]);

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies &&
      movies.map((movie, index: number) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  console.log('movies=======', movies);

  return <div className="movies">{retrievedMovies}</div>;
};

export default Movies;
