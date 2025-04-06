import {useRef} from 'react'

const Reference_useHook = () => {
    const inputElement = useRef(null)
    const focusExecute = () => {
        inputElement.current.focus()

    }

  return (
    <main>
        <h2>Use reference hook: </h2>
        <div>
            <input type='text' ref={inputElement} />
            <button onClick={focusExecute}>Focus & Write JSM</button>
        </div>
    </main>
  )
}

export default Reference_useHook