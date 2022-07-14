import { useMemo, useState } from 'react'
import Typewriter from 'typewriter-effect'

import ru from './locales/ru.js'
import en from './locales/en.js'
import copyIcon from './img/copy-svgrepo-com.svg'

const App = () => {
  const [text, setText] = useState('')
  const [hintVisible, setHintVisible] = useState(false)

  const main = useMemo(() => {
    let locale = /[A-Za-z]/.test(text[0]) ? en : /[А-Яа-я]/.test(text[0]) ? ru : null
    let localeOn = /[A-Za-z]/.test(text[0]) ? ru : /[А-Яа-я]/.test(text[0]) ? en : null

    return text.split('').reduce((res, c) => (res += localeOn[locale.indexOf(c)] || c), '')
  }, [text])

  const hideTypewriterCursor = () => {
    document && (document.querySelector('.Typewriter__cursor').style.visibility = 'hidden')
  }

  const showHint = () => {
    setHintVisible(true)

    setTimeout(() => {
      setHintVisible(false)
    }, 1000)
  }

  return (
    <div>
      <p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('Yfgtxfnfk xnj-nj yt nj&')
              .pauseFor(1400)
              .deleteAll()
              .typeString('Напечатал что-то не то?')
              .callFunction(hideTypewriterCursor)
              .start()
          }}
        />
      </p>

      <textarea
        cols={100}
        rows={8}
        resize='none'
        type='text'
        placeholder='Вставь неправильный текст в английской или русской раскладке'
        onChange={(e) => setText(e.target.value.trim())}
      />

      {main && (
        <div>
          <span data-testid='resultText'>{main}</span>

          <span
            onClick={() => {
              navigator && navigator.clipboard.writeText(main)
              showHint()
            }}
            style={{ cursor: 'pointer', paddingLeft: 3 }}>
            <img style={{ width: '20px' }} src={copyIcon} alt='copy' />
          </span>

          {hintVisible && <span>Скопировал!</span>}
        </div>
      )}
    </div>
  )
}

export default App
