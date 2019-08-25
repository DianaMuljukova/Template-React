import React from 'react';

function Range(props) {
  // const thumbMouseDown = event => {
  //   document.addEventListener('mousemove', onMouseMove);
  //   document.addEventListener('mouseup', onMouseUp);
  //
  //   function onMouseMove() {
  //
  //   }
  // };


  return (
    <div className="directory__range">
      <p>{props.title}</p>
      <div className="range">
        <div className="thumb1"></div>
        <div className="thumb2"></div>
      </div>
    </div>
  )
}

export default Range;