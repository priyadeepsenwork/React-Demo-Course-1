import {useEffect, useState} from 'react'

const CounterEffect = () => {

  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('trigger! count++ ')
  }, [count]);

  return (
    <section>
      <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>CLICK ME</button>
      </div>
    </section>
  )
}

export default CounterEffect