import {useId} from 'react'

const UniqueID = () => {
    const id = useId()
  return (
    <section>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type='text' id={`${id}`}/>

        <br />

        <label htmlFor={`${id}-pswrd`}>Password</label>
        <input type='password' id={`${id}`}/>
    </section>
  )
}

export default UniqueID