import React, { FC } from 'react';

interface HeaderProps {
  text: string;
  refreshPage: () => void;
}

const Header: FC<HeaderProps> = ({ text, refreshPage }) => {
  return (
    <header className="App-header" onClick={refreshPage}>
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
