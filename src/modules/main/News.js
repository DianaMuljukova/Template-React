import React from 'react';
import Container from "../../components/Container";
import Social from "../../components/Social";

function News () {
  return (
    <section className="news">
      <Container>
        <div className="row news__row">
          <div className="col-xl-5">
            <h1>
              Следите за нашими новостями
            </h1>
            <p>
              Подписывайтесь на @conquest_watch в соцсетях и узнавайте о новинках и акциях первыми.
            </p>
            <ul className="news__social">
              <Social/>
            </ul>
          </div>
          <div className="col-xl-5 news__photos">
            <div className="news__photos__first">
              <img src="img/photo_1.png" alt=""/>
              <img src="img/photo_2.png" alt=""/>
            </div>
            <div>
              <img src="img/photo_3.png" alt=""/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}



export default News;