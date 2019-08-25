import React, {useState} from 'react';
import Checkbox from "./Checkbox";

function Accordion(props) {
  const arr = [
    'fas fa-minus',
    'fas fa-plus'
  ];

  const [clicked, setClicked] = useState(false);


  let handleChange = (event) => {
    setClicked(!clicked);
  };

  return (
    <div className="brand">
      <div className="brand__title">
        <p>{props.title}</p>
        <i className={clicked ? arr[0] : arr[1]} onClick={handleChange}></i>
      </div>
      {
        clicked ?
          <div className="brand__options">
            {props.children}
          </div> : ''
      }
    </div>
  )
}

export default Accordion;