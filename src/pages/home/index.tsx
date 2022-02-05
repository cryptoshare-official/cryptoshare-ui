import React from 'react'
import Head from 'next/head'
import { useMapState } from '@/hooks'
import { Container } from '@/styles/pages/home'

import { EventState } from '@/store/interfaces/eventState.interface'
import { setEvent } from '@/store/reducers/event.reducer'
import { WalletStateInterface } from '@/store/interfaces/walletState.interface'
import { setWallet } from '@/store/reducers/wallet.reducer'

const Home: React.FC = () => {
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
                Wallet: {wallet}
                <button
                    className="my-2 border-2 p-2"
                    onClick={() => connectMetaMask()}
                >
                    Connect MetaMask{' '}
                </button>
            </Container>
        </>
    )
}

export default Home
