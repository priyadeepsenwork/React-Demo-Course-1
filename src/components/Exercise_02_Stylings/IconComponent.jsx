import React from 'react'
import { FaBeer } from 'react-icons/fa'

const IconComponent = () => {
  return (
    <div>
        <h2 style={{
            fontSize: '30px',
            color: 'darkviolet'
        }}>Exercise -- icon : 
        <FaBeer color='orange'/>
        <FaBeer size={50} color='maroon'/>
        <FaBeer size={30} color='black'/>

        </h2>
    </div>
  )
}

export default IconComponent