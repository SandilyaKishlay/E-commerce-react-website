// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
      <div id='logo'><img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" width={120} height={40} /></div>
      
      <div id='location-tag'><i class="fa-solid fa-location-crosshairs"></i><span>Delivering to Delhi 110002</span><br /><strong>Update location</strong></div>
    <div id='search-box'><select><option value={'all'} selected>All</option></select><input type='search' placeholder='Search Amazon.in' /><button type='button'><i class="fa-solid fa-magnifying-glass"></i></button></div>
    <div id='lang'><select><option>EN</option></select></div>
    <div id='signin-tag'><span>Hello,sign-in</span><br /><strong>Accounts & lists</strong></div>
    <div id='return-tag'><span>Returns</span><br /><strong>& Orders</strong></div>
    <div id='cart-btn'>
      <div id='cart-item-count'><span><strong>0</strong></span></div>
      <i class="fa-solid fa-cart-shopping fa-2x"></i><span>Cart</span>
      </div>
      </nav>
    </header>
  );
};

export default Header;
