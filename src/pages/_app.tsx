import '@/assets/styles/css/global.css'

import React from 'react'
import { AppProps } from 'next/app'
import theme from '../assets/styles/theme'
import Header from '@/components/ui/header'
import GlobalStyle from '../assets/styles/global'
import { ThemeProvider } from 'styled-components'

import store from '@/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header />
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default MyApp
