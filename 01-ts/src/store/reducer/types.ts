// initial state
export interface InitialStateProps {
  loading: boolean;
  movies?: MovieProps[] | undefined;
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
