import { useMemo, useState } from 'react'

import ru from './locales/ru.js'
import en from './locales/en.js'

const App = () => {
  const [text, setText] = useState('')

  const main = useMemo(() => {
    let locale = /[A-Za-z]/.test(text[0]) ? en : /[А-Яа-я]/.test(text[0]) ? ru : null
    let localeOn = /[A-Za-z]/.test(text[0]) ? ru : /[А-Яа-я]/.test(text[0]) ? en : null

    return text.split('').reduce((res, c) => (res += localeOn[locale.indexOf(c)]), '')
  }, [text])

  return (
    <div>
      <p>Напечатал что-то не то?</p>

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
