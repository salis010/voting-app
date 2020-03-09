import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import './styles/main.css'
import { App } from './components/app'
import { theme } from './styles/theme.js'

const mountNode = document.getElementById('root')

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, root)
