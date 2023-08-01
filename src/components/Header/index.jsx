import React from 'react';
import Navigation from '../Navigation';
import SearchInput from '../SearchInput';

function Header() {
  return (
    <header className="header-section">
      <img src="https://image.dummyjson.com/140x70" alt="" />
      <Navigation />
      <SearchInput />
    </header>
  );
}

export default Header;
