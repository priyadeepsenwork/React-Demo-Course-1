import {useState, useRef} from 'react'

const Timer = () => {
    const [startTime, setStartTime] = useState(null)
    const [now, setNow] = useState(null)
    const intervalRef = useRef(null)

    const handleStart = () => {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 100)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    const handleReset = () => {
        if(intervalRef.current == null){
            setStartTime(0)
            setNow(0)
        }
    }

    let secondsPassed = 0
    if(startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000
    }

  return (
    <section>
        <h2>Time Passed: {secondsPassed.toFixed(1)}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </section>
  )
}

export default Timer