import React from 'react'
import { NavLink } from 'react-router-dom';
import LOGO from '../../assets/LOGO.png'
import BAG from '../../assets/karzinka.png'
import TEL from '../../assets/Group.png'
import strelka from '../../assets/SYZYKCHA.png'
// import slaider from '../../assets/slaider.png'
import IMAGE1 from '../../assets/IMG-1.png'
import IMAGE2 from '../../assets/IMG-2.png'
import IMAGE3 from '../../assets/IMG-3.png'

// import './Header.css'

const Header = () => {
  return (<div>
    <nav>
    <div className="nav-logo">
        <img src={LOGO} alt="" />
      </div>
      <div className="nav-links">
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/shop'>Магазин</NavLink>
        <NavLink to='/about'>О бренде</NavLink>
        <NavLink to='/contacts'>Контакты</NavLink>

        <div className="nav-info">
          <img src={TEL} alt="" />
          <span>+7 (495) 823-54-12</span>
          <img src={BAG} alt="" />
        </div>
      </div>

  
    </nav>

    <div className="header">
      <div className="header-text">
        <h2>Новые поступления <br />в этом сезоне</h2>
        <p>Утонченные сочетания и бархатные <br />оттенки - вот то, что вы искали в этом<br /> сезоне. Время исследовать.</p>
        <img className='strelka' src={strelka} alt="" />
        <button>Открыть магазин</button>
        {/* <img className='slaider' src={slaider} alt="" /> */}
      </div>
      <div className="header-img">
      <img  className='IMAGE3' src={IMAGE3} alt="" />
        <img className='IMAGE1' src={IMAGE1} alt="" />
        <img className='IMAGE2' src={IMAGE2} alt="" />
      
      </div>
    </div>
  </div>
  )
}

export default Header