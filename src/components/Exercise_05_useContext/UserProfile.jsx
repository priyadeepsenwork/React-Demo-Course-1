import { UsersContext } from './UserContextStore'
import { React, useContext } from 'react'

const UserProfile = () => {
    const {name} = useContext(UsersContext)

  return (
    <section>
        <h2>Name is: {name}</h2>
    </section>
  )
}

export default UserProfile