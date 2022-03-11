import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ${tw`text-base`}
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Montserrat', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  #__next {
      height: 100vh;
  }
`
