import React from 'react'
import { AppProps } from 'next/app'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'

import '../styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
