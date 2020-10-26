import React, { FC } from 'react';
import { MyProvider } from '../store';
import Header from './Header';
import Search from './Search';
import Movies from './Movies';
import './App.css';

const App: FC = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="m-container">
        <Header text="HOOKED" refreshPage={refreshPage} />
        <MyProvider>
          <Search />
          <p className="App-intro">Sharing a few of our favourite movies</p>
          <Movies />
        </MyProvider>
      </div>
    </div>
  );
};

export default App;
