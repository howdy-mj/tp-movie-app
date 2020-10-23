import React, { FC } from 'react';

interface HeaderProps {
  text: string;
}

const Header: FC<HeaderProps> = ({ text }) => {
  return (
    <header className="App-header">
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
