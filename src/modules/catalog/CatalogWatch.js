import React, {Component} from 'react';


const WatchRender = ({item}) => (
    <div className="col-xl-4">
      <div className="watch">
        <div className="watch__head">
          <div>
          <p>{item.head}</p>
          <p>{item.price}</p>
          </div>
          <div>
            <i className="far fa-heart"></i>
            <i className="fas fa-shopping-basket"></i>
          </div>
        </div>
        <img src={item.img} alt=""/>
      </div>
    </div>

);



export default WatchRender;