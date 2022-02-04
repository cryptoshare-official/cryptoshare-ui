import React from 'react'
import Head from 'next/head'
import Logo from '../assets/images/vercel.svg'

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
            </Head>

            <Logo />
            <h1>Hello World</h1>
        </div>
    )
}

export default Home
