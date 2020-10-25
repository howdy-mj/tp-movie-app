// initial state
export interface InitialStateProps {
  loading: boolean;
  movies?: MovieProps[];
  errorMessage?: null | string;
}

// movies
export interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// actions
interface RequestMovies {
  type: 'SEARCH_MOVIES_REQUEST';
}

interface SuccessMovies {
  type: 'SEARCH_MOVIES_SUCCESS';
  movies: MovieProps[];
}

interface FailureMovie {
  type: 'SEARCH_MOVIES_FAILURE';
  error: null | string;
}

export type Action = RequestMovies | SuccessMovies | FailureMovie;
