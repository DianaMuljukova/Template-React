import React from 'react';
import Container from "../../components/Container";
import Social from '../../components/Social'

function MainPage() {
  return (
    <section className="main-page">
      <Container>
        <div className="row main-content">
          <div className="col-xl-4">
            <h1>Весна/Лето 2019</h1>
            <h2>Коллекция</h2>
            <p className="main-description">
              Швейцарские часы в наличии в Москве<br/>
              и с доставкой по всему миру
            </p>
            <button className="main-button button">
              Смотреть каталог
            </button>
          </div>
          <div className="main-img">
          <img src="img/watch_main.png" alt="watch" />
            <p className="main-price">22 000 <i className="fas fa-ruble-sign"></i></p>
            <div className="main-line-left"></div>
            <p className="main-conf">28 мм диаметр</p>
            <div className="main-line-right"></div>
          </div>
        </div>
      </Container>
      <ul className="social-media-block">
        <Social/>
      </ul>
    </section>
  );
}

export default MainPage;