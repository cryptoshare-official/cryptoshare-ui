import '@/styles/css/global.css'

import store from '@/store'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import Layout from '@/components/ui/layout'
import WhitepaperLayout from '@/components/whitepaper/layout'
import { setLanguage } from '@/store/reducers/language.reducer'

import { LOCALE_TYPES } from '@/constants/locale.contant'
import { hotjar } from 'react-hotjar'
import enviroments from '@/config/enviroments'

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

    useEffect(() => {
        initHotjar()
        initLanguage()
    }, [])

    const initHotjar = () =>
        hotjar.initialize(enviroments.HOTJAR_HJID, enviroments.HOTJAR_HJSV)

    const initLanguage = () => {
        const { language: languageStore } = store.getState()
        if (languageStore.currentLanguage) return

        const userLang = navigator.language
        const systemLanguages = Object.keys(LOCALE_TYPES).map(key => key)
        const language = systemLanguages.find(lang => userLang.startsWith(lang))

        if (language) setLanguage(language)
        else setLanguage(LOCALE_TYPES.en)
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
