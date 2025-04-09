import React from 'react'
import react_logo from '../../assets/icons/react_logo.svg'

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src={react_logo} alt='react_logo' width={40} height={40}/>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Setup React</li>
            <li>Concepts</li>
            <li>Exercises</li>
            <li>FAQ</li>
            <li>Contact Me</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar