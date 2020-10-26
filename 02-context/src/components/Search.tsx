import React, { FC, useState, useContext } from 'react';
import { MyContext } from '../store';
import axios from 'axios';

const Search: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { dispatch } = useContext(MyContext);

  const search = (searchValue: string) => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      (jsonResponse) => {
        if (jsonResponse.data.Response === 'True') {
          dispatch({
            type: 'SEARCH_MOVIES_SUCCESS',
            movies: jsonResponse.data.Search,
          });
        } else {
          dispatch({
            type: 'SEARCH_MOVIES_FAILURE',
            error: jsonResponse.data.Error,
          });
        }
      }
    );
  };

  const handleSearchInputChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = (): void => {
    setSearchValue('');
  };

  const callSearchFunction = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
