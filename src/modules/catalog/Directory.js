import React, {Component, useState} from 'react';
import Container from "../../components/Container";
//import WatchRender from 'CatalogWatch';
import Checkbox from './Checkbox';
import Accordion from './Accordion';
import Range from './Range';
import WatchRender from "./CatalogWatch";


function Directory () {
  const [filtersBrand, setFiltersBrand] = useState([]);

  const [filtersMech, setFiltersMech] = useState([]);

  const [filtersMat, setFiltersMat] = useState([]);

  const [filtersColor, setFiltersColor] = useState([]);


  let handleChangeBrand = (filter, checked) => {
    let newFilters = [...filtersBrand];

    if (checked) {
      newFilters.push(filter.toLowerCase());
    } else {
      newFilters.splice(newFilters.indexOf(filter), 1)
    }

    setFiltersBrand(newFilters);
  };

  let handleChangeMech = (filter, checked) => {
    let newFilters = [...filtersMech];

    if (checked) {
      newFilters.push(filter.toLowerCase());
    } else {
      newFilters.splice(newFilters.indexOf(filter), 1)
    }

    setFiltersMech(newFilters);
  };

  console.log(filtersMech);

  let handleChangeMat = (filter, checked) => {
    let newFilters = [...filtersMat];

    if (checked) {
      newFilters.push(filter.toLowerCase());
    } else {
      newFilters.splice(newFilters.indexOf(filter), 1)
    }

    setFiltersMat(newFilters);
  };

  console.log(filtersMat);

  let handleChangeColor = (filter, checked) => {
    let newFilters = [...filtersColor];

    if (checked) {
      newFilters.push(filter.toLowerCase());
    } else {
      newFilters.splice(newFilters.indexOf(filter), 1)
    }

    setFiltersColor(newFilters);
  };

  console.log(filtersColor);

  return (
    <section className="directory">
      <Container>
        <div className="row" style={{alignItems: 'center'}}>
          <p className="directory__titles">Главная</p>
          <i className="fas fa-chevron-right directory__titles"></i>
          <p className="directory__titles">Каталог</p>
          <i className="fas fa-chevron-right directory__titles"></i>
          <p className="directory__titles">Мужские часы</p>
        </div>

        <div className="row directory__row">
          <h1>
            Мужские часы
          </h1>
          <div className="directory__sort">
            <p>
              Сортировать по <span>популярности</span>
            </p>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
        <div className="row" style={{justifyContent: 'space-between'}}>
          <div className="col-xl-3">
            <Range title="Стоимость" />

            <div className="filter">

              <Accordion title="Бренд">
                {checkboxBrand.map((item, i) => <Checkbox label={item} key={i} onchange={handleChangeBrand} />)}
              </Accordion>

              <Accordion title="Механизм" >
                {checkboxMech.map((item, i) => <Checkbox label={item} key={i} onchange={handleChangeMech} />)}
              </Accordion>

              <Accordion title="Материал">
                {checkboxMaterial.map((item, i)=> <Checkbox label={item} key={i} onchange={handleChangeMat}/>)}
              </Accordion>

              <Accordion title="Цвет">
                {checkboxColor.map((item, i) => <Checkbox label={item} key={i} onchange={handleChangeColor} />)}
              </Accordion>

              <button className="filter__button button">Сбросить фильтр</button>
            </div>
          </div>
          <div className="col-xl-8 catalog-watches">
            <div className="row">
            {catalogItems.map((item, i) => {
              if (filtersBrand.length > 0) {
                if (!filtersBrand.includes(item.head.toLowerCase())){
                  return null;
                }
              }
              if (filtersMech.length > 0){
                if (!filtersMech.includes(item.mech.toLowerCase())){
                  return null;
                }
              }
              if (filtersMat.length > 0){
                if (!filtersMat.includes(item.mat.toLowerCase())){
                  return null;
                }
              }

              if (filtersColor.length > 0){
                if (!filtersColor.includes(item.color.toLowerCase())){
                  return null;
                }
              }
              return <WatchRender item={item} key={i} />
            })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )

}

const checkboxBrand = ['Techne', 'Rado', 'Bvlgari', 'Tissot', 'Omega', 'Montblanc'];
const checkboxMech = ['Кварцевый', 'Механический'];
const checkboxMaterial = ['Сталь', 'Титан', 'Латунь'];
const checkboxColor = ['Зеленый', 'Желтый', 'Коричневый', 'Черный'];


const catalogItems = [
  {
    head: 'TECHNE',
    price: '12 700',
    img: 'img/1.png',
    mech: 'Кварцевый',
    mat: 'Сталь',
    color: 'Зеленый'
  },
  {
    head: 'TECHNE',
    price: '12 700',
    img: 'img/2.png',
    mech: 'Механический',
    mat: 'Титан',
    color: 'Желтый'
  },
  {
    head: 'TECHNE',
    price: '15 700',
    img: 'img/3.png',
    mech: 'Кварцевый',
    mat: 'Латунь',
    color: 'Коричневый'
  },
  {
    head: 'TECHNE',
    price: '15 700',
    img: 'img/4.png',
    mech: 'Механический',
    mat: 'Титан',
    color: 'Черный'
  },
  {
    head: 'TECHNE',
    price: '12 700',
    img: 'img/5.png',
    mech: 'Кварцевый',
    mat: 'Сталь',
    color: 'Коричневый'
  },
  {
    head: 'TECHNE',
    price: '18 500',
    img: 'img/6.png',
    mech: 'Механический',
    mat: 'Латунь',
    color: 'Коричневый'
  },
  {
    head: 'TECHNE',
    price: '15 700',
    img: 'img/71.png',
    mech: 'Кварцевый',
    mat: 'Титан',
    color: 'Коричневый'
  },
  {
    head: 'RADO',
    price: '14 700',
    img: 'img/1.png',
    mech: 'Механический',
    mat: 'Сталь',
    color: 'Зеленый'
  },
  {
    head: 'BVLGARI',
    price: '72 700',
    img: 'img/9.png',
    mech: 'Кварцевый',
    mat: 'Латунь',
    color: 'Черный'
  },
  {
    head: 'TECHNE',
    price: '22 700',
    img: 'img/72.png',
    mech: 'Механический',
    mat: 'Титан',
    color: 'Коричневый'
  },
  {
    head: 'RADO',
    price: '22 000',
    img: 'img/11.png',
    mech: 'Кварцевый',
    mat: 'Титан',
    color: 'Черный'
  }
];


export default Directory;