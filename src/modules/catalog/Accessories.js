import React from 'react';
import Container from "../../components/Container";
import WatchRender from "./CatalogWatch";

function Accessories() {
  return (
    <section className="accessories">
      <Container>
        <div className="row">
          <div className="row directory__row">
            <h1>
              Ремешки
            </h1>
              <p className="accessories__load">
               Смотреть все
              </p>
          </div>
        </div>

        <div className="row accessories__row">
          {accessoriesItems.map((item, i) => <WatchRender item={item} key={i} />)}
        </div>
      </Container>
    </section>
  )
}

const accessoriesItems = [
  {
    head: 'GEORG JENSEN',
    price: '6 500',
    img: 'img/band_1.png'
  },
  {
    head: 'NATO',
    price: '3 200',
    img: 'img/band_2.png'
  },
  {
    head: 'SPARK',
    price: '5 400',
    img: 'img/band_3.png'
  }
];

export default Accessories;