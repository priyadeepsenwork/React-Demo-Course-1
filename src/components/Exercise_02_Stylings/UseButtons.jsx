const UseButtons = () => {
    const handleClick = () => {
        console.log(Math.round(Math.random() * 100))
    }

    //If you copy the text its attached to, this will trigger.
    const copyHandler = () => {
        console.log('Hey, we are watching you!')
    }

    const MoveHandler = () => { 
        alert('Did you come near me?')
        console.log('Mouse move event fired.')
    }

  return (
    <div>
        <button
            onClick={handleClick}
        >
            Click
        </button>
        <p onCopy={copyHandler}>I will be the greatest NextJS Developer</p>
        <div onMouseMove={MoveHandler}>
            <p>Heyaaa, dont come near mee</p>
        </div>
        
    </div>
  )
}

export default UseButtons