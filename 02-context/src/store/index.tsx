import React, { useReducer, Dispatch } from 'react';
import { initialState, reducer } from './reducer';
import { Action, InitialStateProps } from './reducer/types';

const MyContext = React.createContext<{
  state: InitialStateProps;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const MyProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
