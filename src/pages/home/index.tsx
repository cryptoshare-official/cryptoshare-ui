import React from 'react'
import Head from 'next/head'
import locale from '@/locales/home'
import { useMapState } from '@/hooks'
import { Container } from '@/styles/pages/home'
import { HomeTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import { setEvent } from '@/store/reducers/event.reducer'
import { setWallet } from '@/store/reducers/wallet.reducer'
import { setLanguage } from '@/store/reducers/language.reducer'
import { EventState } from '@/store/interfaces/eventState.interface'
import { WalletStateInterface } from '@/store/interfaces/walletState.interface'

const Home: React.FC = () => {
    const translate = useTranslate<HomeTranslateType>(locale)
    const { events } = useMapState('event') as EventState
    const { wallet } = useMapState('wallet') as WalletStateInterface

    const connectMetaMask = async () => {
        const _window = window as any

        const [account] = await _window.ethereum.request({
            method: 'eth_requestAccounts'
        })

        setWallet(account)
        console.log('WALLET :', wallet)
    }

    return (
        <>
            <Head>
                <title>Home - Cripto Share</title>
            </Head>

            <Container>
                Language: {translate.hello}
                <br />
                <br />
                <ul className="flex">
                    {events.map((item, index) => (
                        <li key={index}>{item} | </li>
                    ))}
                </ul>
                <br />
                <button
                    className="my-4 border-2 p-2"
                    onClick={() => setEvent(1)}
                >
                    Add to Store
                </button>
                {/* Wallet: {wallet}
                <button
                    className="my-2 border-2 p-2"
                    onClick={() => connectMetaMask()}
                >
                    Connect MetaMask{' '}
                </button> */}
            </Container>
        </>
    )
}

export default Home
