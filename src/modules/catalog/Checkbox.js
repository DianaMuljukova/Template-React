
import React from 'react';

function Checkbox({label, onchange}) {

  function checkboxChange(e) {

    onchange(label, e.target.checked);
  }

  return (
    <label>
      <input type="checkbox" className="check" onChange={checkboxChange} />
      <span className="checkpoint"></span>
      {label}
    </label>
  )
}
export default Checkbox;