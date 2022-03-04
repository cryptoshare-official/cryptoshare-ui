import '@/styles/css/global.css'

import store from '@/store'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import React from 'react'
import { AppProps } from 'next/app'
import Layout from '@/components/ui/layout'
import WhitepaperLayout from '@/components/whitepaper/layout'

const persistor = persistStore(store)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const { pathname } = router
    const whitepaperPath = '/whitepaper'

    const renderLayout = (children: JSX.Element) => {
        const layouts = {
            default: <Layout>{children}</Layout>,
            whitepaper: <WhitepaperLayout>{children}</WhitepaperLayout>
        }

        if (pathname.startsWith(whitepaperPath)) return layouts.whitepaper
        else return layouts.default
    }

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {renderLayout(<Component {...pageProps} />)}
            </PersistGate>
        </Provider>
    )
}

export default MyApp
