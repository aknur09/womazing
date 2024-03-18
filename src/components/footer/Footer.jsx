
import React from 'react';
import IMAGEP from '../../assets/IMAGEP.png';

import LOGO from '../../assets/LOGO.png'


// import WOMAZING from '../../assets/womazing.png'
// import SOCIAL from '../../assets/TS.png'
// import VISA from '../../assets/visa.png'

const Footer = () => {
  return (
<div>
<div className="info">
      
      <div className="footer-info">
   
        <div className="image">
        <h2>Команда мечты Womazing</h2>
          <img src={IMAGEP} alt="" />
          {/* <img src={strelka2} alt="" /> */}
        </div>
        <div className="footer-text">
          <h3>Для каждой</h3>
          <h5>Каждая девушка уникальна. <br /> Однако, мы схожи в <br /> миллионе мелочей. </h5>
          <h5>Womazing ищет эти мелочи и <br /> создает прекрасные вещи, <br /> которые выгодно <br /> подчеркивают достоинства каждой девушки.</h5>
          <h6>Подробнее о бренде</h6>
        </div>
      </div>
   
    </div>

    <div className="footer-maket">
  <div className="footers">
    <div className="footer-logo">
      <img src={LOGO} alt="" />
    </div>
    <div className="footer-links">
      <a href="/">Главная</a>
      <a href="/shop">Магазин</a>
      <a href="/about">О бренде</a>
      <a href="/contacts">Контакты</a>
      <span>+7 (495) 823-54-12</span>
    </div>
    {/* <div className="footer-info">
      <img src={TEL} alt="" />
      
   
    </div> */}
{/* <div className="text">
  <p>© Все права защищены</p>
  <p>Политика конфиденциальности</p>
  <p>Публичная оферта</p>
</div>

<div className="o-mogazine">
<p>Пальто</p>
<p>Свитшоты</p>
<p>Кардиганы</p>
<p>Толстовки</p>
</div>
<div className="tel">
  <img src={WOMAZING} alt="" />
  <img src={SOCIAL} alt="" />
  <img src={VISA} alt="" />
</div> */}
  </div>
</div> 
</div>
    
  );
};

export default Footer;