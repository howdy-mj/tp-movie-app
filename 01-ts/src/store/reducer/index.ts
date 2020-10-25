import { InitialStateProps, Action } from './types';

export const initialState: InitialStateProps = {
  loading: true,
  movies: [],
  errorMessage: null,
};

export const reducer = (state = initialState, action: Action) => {
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
