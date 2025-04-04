import React from 'react'

const Child_Component2 = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler()
    return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Decrement</button>
    </div>
  )
}

export default Child_Component2