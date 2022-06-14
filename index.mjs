import ru from './locales/ru.mjs'
import en from './locales/en.mjs'

const main = (text) => {
  let locale = /[A-Za-z]/.test(text[0]) ? en : /[А-Яа-я]/.test(text[0]) ? ru : null
  let localeOn = /[A-Za-z]/.test(text[0]) ? ru : /[А-Яа-я]/.test(text[0]) ? en : null

  return text.split('').reduce((res, c) => (res += localeOn[locale.indexOf(c)]), '')
}

export default main
