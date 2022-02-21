import '@/styles/css/global.css'

import store from '@/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import React from 'react'
import { AppProps } from 'next/app'
import theme from '@/styles/css/ts/theme'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import GlobalStyle from '../styles/css/ts/global'
import { ThemeProvider } from 'styled-components'

const persistor = persistStore(store)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />

                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default MyApp
