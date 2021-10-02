import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: monospace;
    color: #F8F8FF;
    background-color: #121212;
  }

  body {
    margin: 0 auto;
    max-width: 50em;
    line-height: 1.5;
    padding: 4em 1em;
    display: flex;
    justify-content: center;
  }

  h1, h2, strong {
    color: #fff;
  }

  a {
    color: #00FF7F
  }

  button, input {
    background-color: #F8F8FF;
    color: #121212;
    border: none;
    padding: 5px;
    margin: 5px;
  }

  button:hover {
    background-color: #DCDCDC;
  }

  button:active {
    background-color: #808080;
  }

  table {
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  td, th {
    border: 1px solid #F8F8FF;
    padding: 0.5rem;
  }
`

export default GlobalStyle