import React from 'react'
import Head from 'next/head'
import { useMapState } from '@/hooks'
import { useDispatch } from 'react-redux'
import { Container, Title } from './styles'

import { EventState } from '@/store/interfaces/eventState.interface'
import { setEvent } from '@/store/reducers/event.reducer'

const Home: React.FC = () => {
    const { events } = useMapState('event') as EventState
    const dispatch = useDispatch()

    console.log('::::', events)
    return (
        <>
            <Head>
                <title>Home - Cripto Share</title>
            </Head>

            <Container>
                <Title>Home</Title>

                <ul>
                    {events.map((item, index) => (
                        <li>{item}</li>
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
