import { useMemo, useState } from 'react'
import Typewriter from 'typewriter-effect'

import ru from './locales/ru.js'
import en from './locales/en.js'

const App = () => {
  const [text, setText] = useState('')

  const main = useMemo(() => {
    let locale = /[A-Za-z]/.test(text[0]) ? en : /[А-Яа-я]/.test(text[0]) ? ru : null
    let localeOn = /[A-Za-z]/.test(text[0]) ? ru : /[А-Яа-я]/.test(text[0]) ? en : null

    return text.split('').reduce((res, c) => (res += localeOn[locale.indexOf(c)]), '')
  }, [text])

  const hideTypewriterCursor = () => {
    document && (document.querySelector('.Typewriter__cursor').style.visibility = 'hidden')
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

      <input
        type='text'
        placeholder='Вставь неправильный текст в английской или русской раскладке'
        onChange={(e) => setText(e.target.value.trim())}
      />

      <div>{main}</div>
    </div>
  )
}

export default App
