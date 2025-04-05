import { createPortal } from "react-dom"

const Popup_Content = ({copied}) => {
  return createPortal(
    <section>
        {copied && (
            <div style={{
                position: 'absolute',
                bottom: '3rem'
            }}>
                Copied to Clipboard
            </div>
        )}
    </section>,
    document.querySelector('#popup-content-test')
  )
}

export default Popup_Content