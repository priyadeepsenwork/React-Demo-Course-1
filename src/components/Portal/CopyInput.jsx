import React, { useState } from 'react'
import Popup_Content from './Popup_Content'
import Switcher from './Switcher'

const CopyInput = () => {

    const [input, setInput] = useState('')
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(input).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 6000)
        })
    }

  return (
    <section>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleCopy} type="submit">
          Copy
        </button>
      </div>
      <div>
        <Popup_Content copied={copied} />
        <Switcher />
      </div>
    </section>
  );
}

export default CopyInput