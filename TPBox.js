import React from 'react';

function Box (props)
{
  return (
    <button class="board_box" onClick={props.handleClick} disabled={props.disabled}>
      {props.value}
    </button>
  )
}

export default Box;