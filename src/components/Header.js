import React, { useState } from 'react';
import Container from "./Container";

function Header() {
  const [clicked, setClicked] = useState(false);

  let isMainPage = window.location.pathname === '/';
  let isCatalog = window.location.pathname == '/catalog';
  let isCatalogItem = window.location.pathname == '/item';


  function handleClick() {
    setClicked(!clicked);
  }

  const clickedStyle = {
    opacity: 1,
    marginRight: 30
  };

  const renderMenu = (item) => (
    <li key={item.id} className={item.menuItem} style={clicked || isCatalog || isCatalogItem ? clickedStyle : {opacity: 0}}>
      <a href={item.link}>{item.text}</a>
    </li>
  );

  return (
    <Container>
      <div className="row">
        <div className="header col-xl-12">
          <div className="menu-block">
            <div className="menu-bar" onClick={handleClick}>
              {
                isMainPage ?
                  <a>
                    <i className="fas fa-bars"></i>
                  </a> :
                  ""
              }


              <nav className="menu__nav" style={isCatalog || isCatalogItem ? {marginLeft: '200px'} : {}}>
                <ul className="menu">
                  {menu.map(item => renderMenu(item))}
                </ul>
              </nav>
            </div>
            {
              clicked ? "" : <img src="img/logo.png" alt="logo" className="logo" style={isCatalog || isCatalogItem ? {left: 0} : {}} />
            }
          </div>

            <div className="icons-block">
              {iconsBlock.map(item => renderSocialHeader(item))}
            </div>

        </div>
      </div>
    </Container>
  )
}

const menu = [
  {
    menuItem: 'menu__item',
    link: 'http://localhost:3000/catalog',
    id: 1,
    text: 'Каталог'
  },
  {
    menuItem: 'menu__item',
    link: '#',
    id: 2,
    text: 'Акции'
  },
  {
    menuItem: 'menu__item',
    link: '#',
    id: 3,
    text: 'Доставка'
  },
  {
    menuItem: 'menu__item',
    link: '#',
    id: 4,
    text: 'Контакты'
  },
];

const renderSocialHeader = (item) => (
    <a href={item.link} key={item.icon}>
      <i className={"fab " + item.icon}></i>
    </a>
);

const iconsBlock = [
  {
    icon: "fas fa-search",
    link: "#"
  },
  {
    icon: "far fa-heart",
    link: "#"
  },
  {
    icon: "fas fa-shopping-basket",
    link: "#"
  }
];

export default Header;