import {
    FaLink,
    FaTwitter,
    FaDiscord,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane
} from 'react-icons/fa'
import React from 'react'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/whitelist'
import Supershare from '@/components/whitelist/supershare'
import Participate from '@/components/whitelist/participate'
import { ScoreInterface } from '@/interfaces/whitelist.interface'
import AboutWhitelist from '@/components/whitelist/about-whitelist'
import GoldListRegister from '@/components/whitelist/gold-list-register'

const WhiteList: React.FC = () => {
    const whitelistItems: ScoreInterface[] = [
        {
            id: 1,
            score: 2,
            icon: <FaInstagram />,
            title: 'Seguir no Instagram'
        },
        {
            id: 2,
            score: 2,
            icon: <FaFacebookF />,
            title: 'Curtir a página do facebook'
        },
        {
            id: 3,
            score: 2,
            icon: <FaTelegramPlane />,
            title: 'Entrar no grupo do Telegram'
        },
        { id: 4, icon: <FaTwitter />, title: 'Seguir no Twitter', score: 2 },
        {
            id: 5,
            score: 2,
            icon: <FaDiscord />,
            title: 'Entrar no grupo do Discord'
        }
    ]

    const superShareItems: ScoreInterface[] = [
        {
            id: 1,
            score: 2,
            icon: <FaInstagram />,
            title: 'Repost no Instagram'
        },
        {
            id: 2,
            score: 2,
            icon: <FaFacebookF />,
            title: 'Repost no Facebook'
        },
        {
            id: 3,
            score: 2,
            icon: <FaTwitter />,
            title: 'Retweet no Tweet'
        },
        {
            id: 4,
            score: 2,
            icon: <FaLink />,
            title: 'Link de Indicação'
        },
        {
            id: 5,
            score: 2,
            icon: <FaFacebookF />,
            title: 'Libera link para fazer indicações'
        }
    ]

    return (
        <>
            <AppHead title="Whitelist" />

            <Container>
                <AboutWhitelist />
                <Participate scoreItems={whitelistItems} />
                <Supershare scoreItems={superShareItems} />
                <GoldListRegister />
            </Container>
        </>
    )
}

export default WhiteList
