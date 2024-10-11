import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        console.log("Child component got re-render")
      return (
        <div>
            <button>
                {props.buttonName}
            </button>
        </div>
      )
    }
)

export default ChildComponents

// React.memo -> wrap -> component -> component
// re—render tabhi hoga jab props change honge nahi toh
// re—render nahi hoga