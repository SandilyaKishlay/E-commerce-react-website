// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
