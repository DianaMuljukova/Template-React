import React, {useState} from 'react';

function CatalogItemContent() {
    const [description, setDescription] = useState(true);
    const [tech, setTech] = useState(false);


    return (
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
                    <p onClick={() => {setDescription(!description); setTech(!tech)}} style={{borderColor: description ? 'black' : ''}}>Описание</p>
                    <p onClick={() => {setTech(!tech); setDescription(!description)}} style={{borderColor: tech ? 'black' : ''}}>Технические характеристики</p>
                </div>
                {
                    description ? <div className="catalog-cart__description">
                        <p>Наручные часы KULTE, разработанные датским дизайнером Хэннингом Коппелем, были выпущены в 1982 году. Они были встречены аплодисментами, а дизайн считался революционным.</p>

                        <p>Общая эстетика минималистична, а острые, плавные линии корпуса стали легендарными. Механизм Swiss Made обеспечивает высокий уровень технических характеристик.</p>

                        <p>Наручные часы KULTE — это образец датского дизайнерского наследия, история баланса и точности как внутри, так и снаружи.</p>
                    </div>
                        : null
                }
                {
                    tech ? <div className="catalog-cart__description">
                        <p>На странице введения в хуки мы познакомились с ними на этом примере:</p>

                        <p>Давайте начнём изучать хуки, сравнив этот код с эквивалентным кодом на основе класса.</p>

                        <p>Каждый раз, когда пользователь кликает, мы увеличиваем state.count на единицу, вызывая this.setState(). Мы будем использовать фрагменты этого класса на протяжении всей страницы.</p>
                    </div>
                        : null
                }




                <button className="button catalog-cart__button">В корзину</button>
            </div>
        </div>
    )
}

export default CatalogItemContent;