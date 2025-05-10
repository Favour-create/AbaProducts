import React from 'react';
import './Header.css';
import shopping from '../../assets/Shopping.jpg';

const Header = () => {
  return (
    <div className='header'>

      <div className='header-content'>
      <h1>SHOP - <span className='in'>IN</span> - ABA</h1>
      <p>From anywhere in the world. Discover high quality Aba-Made products from various Merchants and Suppliers. <br /> 
        Ranging from Automobiles, Tricylces, Clothes, Shoes, Industrial Machines, <br />
        Computer and so many more intriguing products.</p>

        <button type='submit'>SHOP NOW</button>
      
     
        </div>
      <div className="image">

        <img src={shopping} alt="shopping" />
        </div>
    </div>
  
  );
};

export default Header;