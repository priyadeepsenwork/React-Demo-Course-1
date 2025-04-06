import React from 'react'

const Greeting = ({timeOfDay}) => {
    //let message = ((timeOfDay === "morning")? "Good Morning" : "Good Afternoon")
  return (
    <div>
        {(timeOfDay === "morning") ? (
            <h2>Good Morning</h2>
        ) : (
            <h2>Good Afternoon</h2>
        )}
    </div>
  )
}

export default Greeting