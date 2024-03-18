import React from 'react';
import TOVAR1 from '../../assets/tovar1.png';
import TOVAR2 from '../../assets/tovar2.png';
import TOVAR3 from '../../assets/tovar3.png';

const Hero = () => {
  return (
    <div className="hero">
         <h3>Новая коллекция</h3>
      <div className="hero-info">
     
        <div className="tovar">
          <img src={TOVAR1} alt="" />
          <h4>Футболка USA</h4>
          <p id='price'>$229</p> <p>$129</p>
        </div>
        <div className="tovar">
          <img src={TOVAR2} alt="" />
          <h4>Купальник Glow</h4>
          <p>$229</p>
        </div>
        <div className="tovar">
          <img src={TOVAR3} alt="" />
          <h4>Свитшот Sweet Shot</h4>
          <p>$129</p>
        </div>
       
      </div>
      <button className="btn btn-outline-success">Открыть магазин</button>
    </div>
  );
};

export default Hero;