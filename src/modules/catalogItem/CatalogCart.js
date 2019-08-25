import React, {Component, useState} from 'react';
import Container from "../../components/Container";


const photosArr = ['img/watch_card_1.png', 'img/watches_2.png', 'img/watches_5.png', 'img/watches_4.png', 'img/watches_5.png'];

function CatalogCart() {
  const [index, setIndex] = useState(0);
  const handleClickLeft = () => {
    setIndex(index + 1);
  };

  return (
    <section className="catalog-cart">
      <Container>
        <div className="row" style={{alignItems: 'center'}}>
          <p className="directory__titles">Главная</p>
          <i className="fas fa-chevron-right directory__titles"></i>
          <p className="directory__titles">Каталог</p>
          <i className="fas fa-chevron-right directory__titles"></i>
          <p className="directory__titles">Мужские часы</p>
          <i className="fas fa-chevron-right directory__titles"></i>
          <p className="directory__titles">Georg Jensen</p>
        </div>

        <div className="row catalog-cart__row">
          <div className="col-xl-5">
            <div className="catalog-cart__main-photo">
            <i className="fas fa-chevron-left" onClick={handleClickLeft}></i>
            <img src={photosArr[index]} alt=""/>
            <i className="fas fa-chevron-right"></i>
            </div>
            <div className="catalog-cart__miniature">
              <div className="catalog-cart__miniature-container">
                <img src="img/watches_2.png" alt=""/>
              </div>
              <div className="catalog-cart__miniature-container">
                <img src="img/watches_5.png" alt=""/>
              </div>
              <div className="catalog-cart__miniature-container">
                <img src="img/watches_4.png" alt=""/>
              </div>
              <div className="catalog-cart__miniature-container">
                <img src="img/watches_5.png" alt=""/>
              </div>
            </div>
          </div>

          <div className="col-xl-5">
            <div className="catalog-cart__content">
              <div className="watch__head catalog-cart__head">
                <div>
                  <p>KULTE, 26 ММ</p>
                  <p>12 700 <i className="fas fa-ruble-sign"></i></p>
                </div>
                <div>
                  <i className="far fa-heart"></i>
                </div>
              </div>
              <div className="catalog-cart__titles">
                <p>Описание</p>
                <p>Технические характеристики</p>
              </div>
              <div className="catalog-cart__description">
                <p>Наручные часы KULTE, разработанные датским дизайнером Хэннингом Коппелем, были выпущены в 1982 году. Они были встречены аплодисментами, а дизайн считался революционным.</p>

                <p>Общая эстетика минималистична, а острые, плавные линии корпуса стали легендарными. Механизм Swiss Made обеспечивает высокий уровень технических характеристик.</p>

                <p>Наручные часы KULTE — это образец датского дизайнерского наследия, история баланса и точности как внутри, так и снаружи.</p>
              </div>
              <button className="button catalog-cart__button">В корзину</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}




export default CatalogCart;