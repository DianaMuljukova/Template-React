import React, {Component, useState} from 'react';
import Container from "../../components/Container";

function Sales() {
  return (
    <section className="sales">
    <Container>
      <div className="row sales__row">
        <div className="col-xl-5">
        <p className="sales__sub">Подписка на рассылку</p>
        <h1>Получить скидку 10% на первую покупку</h1>
        </div>


          <div className="col-xl-3" style={{alignSelf: 'flex-end'}}>
          <input type="email" placeholder="E-mail" className="sales__email"/>
          </div>
        <div className="col-xl-2" style={{alignSelf: 'flex-end'}}>
          <button className="button sales__button">Подписаться</button>
        </div>
      </div>
    </Container>
    </section>
  )
}
export default Sales;