import React, {Component} from 'react';
import Container from "../../components/Container";

class Slider extends Component{
  constructor(props) {
    super(props);
    this.state ={
      current: 0
    };

    this.slides = [
      {
        img: "img/photo_banner.png",
        title: "Подлинное качество",
        description: "Все часы производятся в Швейцарии и имеют сертификаты качества. Настоящие швейцарские часы — это предмет гордости и престижа."
      },
      {
        img: "img/photo_banner.png",
        title: "Заголовок 2",
        description: "Описание 2"
      },
    ]
  }

  handleLeftArrow = () => {
    this.setState(prevState => {
      return {
        current: prevState.current == 0 ? prevState.current : prevState.current - 1
      }
    })
  };

  handleRightArrow = () => {
    this.setState(prevState => {
      return {
        current: prevState.current === this.slides.length - 1 ? prevState.current : prevState.current + 1
      }
    });
  };

  render() {
    const { current } = this.state;

    return (
      <section className="slider">
        <Container>
          <div className="row slider__row">
            <div className="slide">
              <div className="col-xl-5">
                <img src={this.slides[current].img} alt=""/>
              </div>
              <div className="col-xl-5">
                <h1>
                  {this.slides[current].title}
                </h1>
                <p className="slider__definition">
                  {this.slides[current].description}
                </p>
                <button className="button slider__button">
                  СМОТРЕТЬ КАТАЛОГ
                </button>
              </div>
            </div>
          </div>

          <div className="row slider__move">
            <div className="arrow-left" onClick={this.handleLeftArrow}><i className="fas fa-chevron-left"></i></div>

            <div>{current + 1}</div>

            <div className="arrow-right" onClick={this.handleRightArrow}><i className="fas fa-chevron-right"></i></div>
          </div>
        </Container>
      </section>
    )
  }
}

export default Slider;