import { InitialStateProps, MovieProps } from './types';

export const initialState: InitialStateProps = {
  loading: true,
  movies: [],
  errorMessage: null,
};

type Action =
  | { type: 'SEARCH_MOVIES_REQUEST' }
  | { type: 'SEARCH_MOVIES_SUCCESS'; movies: MovieProps[] }
  | {
      type: 'SEARCH_MOVIES_FAILURE';
      error: null | string;
    };

export const reducer = (
  state = initialState,
  action: Action
): InitialStateProps => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        loading: false,
        movies: action.movies,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
