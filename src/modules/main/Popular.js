import React from 'react';
import Container from "../../components/Container";

function Popular() {
  return (
    <section className="popular">
      <Container>
        <div className="row">
          <div className="col-xl-12 popular__title">
            <h1>
              Популярные модели
            </h1>
            <a className="open">Смотреть все</a>
          </div>

          <div className="row popular__row">
            <div className="col-xl-4">

              <div className="popular__prod popular__prod__first" style={{height: "467px"}}>
                <div className="popular__prod__price">
                  <p>RADO <i className="fas fa-ruble-sign"></i></p>
                  <p>65 300</p>
                </div>
              <img src="img/watch_1.png" />
                <p className="popular__description">Подробнее</p>
              </div>

            </div>

            <div className="col-xl-6">

              <div className="popular__prod popular__prod__second" style={{height: "472px"}}>
                <div className="popular__prod__price">
                  <p>RADO <i className="fas fa-ruble-sign"></i></p>
                  <p>65 300</p>
                </div>
                <img src="img/watch_2.png" className="second-img" />
                <p className="popular__description">Подробнее</p>
              </div>

            </div>
          </div>

          <div className="row popular__row">
            <div className="col-xl-5">

              <div className="popular__prod popular__prod__third">
                <div className="popular__prod__price">
                  <p>RADO <i className="fas fa-ruble-sign"></i></p>
                  <p>65 300</p>
                </div>
                <img src="img/watch_3.png" />
                <p className="popular__description">Подробнее</p>
              </div>

            </div>

            <div className="col-xl-5">

              <div className="popular__prod popular__prod__third">
                <div className="popular__prod__price">
                  <p>RADO <i className="fas fa-ruble-sign"></i></p>
                  <p>65 300</p>
                </div>
                <img src="img/watch_4.png" />
                <p className="popular__description">Подробнее</p>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Popular;