import React from 'react'
import CARD1 from '../../assets/CARD1.png'
import CARD2 from '../../assets/CARD2.png'
import CARD3 from '../../assets/CARD3.png'

const Card = () => {
  return (
  <div className="card-info">
    <h2>Что для нас важно</h2>
    <div className="cards">
      <div className="card">
        <img src={CARD1} alt="" />
        <h3>Качество</h3>
        <h5>Наши профессионалы работают на <br />лучшем оборудовании для пошива<br /> одежды беспрецедентного<br /> качества</h5>
      </div>
      <div className="card">
        <img src={CARD2} alt="" />
        <h3>Скорость</h3>
        <h5>Благодаря отлаженной системе в <br />Womazing мы можем отшивать до <br />20-ти единиц продукции в наших<br /> собственных цехах</h5>
      </div>
      <div className="card">
        <img src={CARD3} alt="" />
        <h3>Ответственность</h3>
        <h5>Мы заботимся о людях и планете<div className="br"></div> Безотходное производство и <br />комфортные условия труда - все <br />это Womazing</h5>
      </div>
    </div>
  </div>
  )
}

export default Card