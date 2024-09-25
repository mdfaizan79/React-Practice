import React from 'react'

function Count(props) {
  return (
    <div>
        
        {props.children}
      <button onClick={props.Click}>
      {props.text}
      </button>
    </div>
  )
}

export default Count
