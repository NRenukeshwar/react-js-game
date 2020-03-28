import React from 'react';

function Box (props)
{
  return (
    <button class={props.value ==="X"?"btn board_Xbox":"btn board_Obox"} onClick={props.handleClick} disabled={props.disabled}>
      <b>{props.value}</b>
    </button>
  )
}

export default Box;