import React from 'react';

function Box (props)
{
  return (
    <button className={props.value ==="X"?"board_Xbox":"board_Obox"} onClick={props.handleClick} disabled={props.disabled}>
      <b>{props.value}</b>
    </button>
  )
}

export default Box;