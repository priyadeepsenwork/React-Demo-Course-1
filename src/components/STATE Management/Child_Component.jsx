import React from 'react'

const Child_Component = ({count, onClickHandler}) => {
    const handleClick = () => onClickHandler()
  return (
    <div>
        <p>{count} </p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Child_Component