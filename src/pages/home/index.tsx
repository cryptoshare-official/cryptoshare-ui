import React from 'react'
import Head from 'next/head'
import { useMapState } from '@/hooks'
import { Container, Title } from '@/styles/pages/home'

import { EventState } from '@/store/interfaces/eventState.interface'
import { setEvent } from '@/store/reducers/event.reducer'

const Home: React.FC = () => {
    const { events } = useMapState('event') as EventState
    return (
        <>
            <Head>
                <title>Home - Cripto Share</title>
            </Head>

            <Container>
                <Title>Home</Title>

                <ul>
                    {events.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <br />

                <div>
                    <button
                        style={{ marginRight: 14 }}
                        onClick={() => setEvent(1)}
                    >
                        ADD
                    </button>
                    <button>Remove</button>
                </div>
            </Container>
        </>
    )
}

export default Home
