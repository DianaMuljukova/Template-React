import React, {Component, useState} from 'react';
import Container from "../../components/Container";
import CatalogItemPhotos from './CatalogItemPhotos';
import CatalogItemContent from './CatalogItemContent';
import WatchRender from './../catalog/CatalogWatch';


const photosArr = ['img/watch_card_1.png', 'img/watches_2.png', 'img/watches_5.png', 'img/watches_4.png', 'img/watches_5.png'];

function CatalogCart() {

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
            <CatalogItemPhotos photosArray={photosArr} />
            <CatalogItemContent/>
          </div>

          <div className="row">
            <h2>Вы смотрели</h2>
          </div>

          <div className="row catalog-cart__items">
            {
              catalogCartItems.map((item, i) => {
                return <WatchRender item={item} key={i}/>
              })
            }
          </div>
        </Container>
      </section>
  )
}

const catalogCartItems =[
  {
    head: 'TECHNE',
    price: '12 700',
    img: 'img/часы1.png'
  },
  {
    head: 'TECHNE',
    price: '12 700',
    img: 'img/часы1.png'
  },
  {
    head: 'TECHNE',
    price: '12 700',
    img: 'img/часы1.png'
  }
];




export default CatalogCart;