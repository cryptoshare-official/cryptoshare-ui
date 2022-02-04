import '@/assets/styles/css/global.css'

import React from 'react'
import { AppProps } from 'next/app'
import theme from '../assets/styles/theme'
import Header from '@/components/ui/header'
import GlobalStyle from '../assets/styles/global'
import { ThemeProvider } from 'styled-components'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
