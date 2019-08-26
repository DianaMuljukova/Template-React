import React, {useState} from 'react';

function CatalogItemPhotos(props) {

    const [index, setIndex] = useState(0);

    const handleClickLeft = () => {
        if (index > 0){
            setIndex(index - 1);
        } else {
            setIndex(props.photosArray.length - 1);
        }
    };

    const handleClickRight = () => {
        if (index < props.photosArray.length - 1){
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    };

    return (
        <div className="col-xl-5">
            <div className="catalog-cart__main-photo">
                <i className="fas fa-chevron-left" onClick={handleClickLeft}></i>
                <img src={props.photosArray[index]} alt=""/>
                <i className="fas fa-chevron-right" onClick={handleClickRight}></i>
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
    )
};



export default CatalogItemPhotos;