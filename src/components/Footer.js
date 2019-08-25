import React from 'react';
import Container from "./Container";

function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="row footer__row">

          <div className="col-xl-2 footer__logo-block">
            <ul>
              <li>
                <img src="img/logo_footer.png" />
              </li>
              <li>
                8 (499) 450-47-97
              </li>
              <li>
                info@conquest.watch.ru
              </li>
            </ul>
          </div>

          <div className="col-xl-2">
            <ul>
              <li className="footer__head">
                о компании
              </li>
              <li>
                Наши магазины
              </li>
              <li>
                Вакансии
              </li>
              <li>
                Сертификаты
              </li>
              <li>
                Отзывы
              </li>
            </ul>
          </div>

          <div className="col-xl-2">
            <ul>
              <li className="footer__head">
                покупателям
              </li>
              <li>
                Каталог товаров
              </li>
              <li>
                Как заказать?
              </li>
              <li>
                FAQ
              </li>
              <li>
                Корпоративным клиентам
              </li>
            </ul>
          </div>

          <div className="col-xl-2">
            <ul>
              <li className="footer__head">
                оплата и доставка
              </li>
              <li>
                Способы оплаты
              </li>
              <li>
                Время доставки
              </li>
              <li>
                Гарантии и ремонт
              </li>
              <li>
                Возврат и компенсация
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer;