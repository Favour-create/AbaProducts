import React from 'react';
import './Header.css';
import bag from "../../assets/Bag.jpg"
import car from "../../assets/Car.jpg"
import shoes from "../../assets/Shoes.jpg"


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

        <div className="image1">
        <img src={bag} alt="" />
        </div>

        <div className="image2">
          <img src={car} alt="" />
        </div>
        
        <div className="image3">
          <img src={shoes} alt="" />
        </div>

        </div>
    </div>
  
  );
};

export default Header;