import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import App from '../App'

test('loads and displays greeting', async () => {
  render(<App />)
  const textArea = screen.getByPlaceholderText(
    'Вставь неправильный текст в английской или русской раскладке',
  )
  fireEvent.change(textArea, { target: { value: 'Dctv dybvfybt! Ghjivfyljdrb gjknfdb d xfnt' } })

  expect(textArea).toHaveValue('Dctv dybvfybt! Ghjivfyljdrb gjknfdb d xfnt')

  expect(screen.getByTestId('resultText')).toHaveTextContent(
    'Всем внимание! Прошмандовки полтави в чате',
  )
})
