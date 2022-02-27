import {
    FaLink,
    FaTwitter,
    FaDiscord,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane
} from 'react-icons/fa'
import React, { useState } from 'react'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/whitelist'
import AuthModal from '@/components/common/auth-modal'
import Supershare from '@/components/whitelist/supershare'
import Participate from '@/components/whitelist/participate'
import { ScoreInterface } from '@/interfaces/whitelist.interface'
import AboutWhitelist from '@/components/whitelist/about-whitelist'
import GoldListRegister from '@/components/whitelist/gold-list-register'

const WhiteList: React.FC = () => {
    const [isModalLoginOpen, setModalLoginOpen] = useState(false)
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

    const onSubmitGoldListForm = (data: { email: string }) => {
        console.log('DATA :', data)
    }

    const onSelectWhitelist = (item: ScoreInterface) => {
        console.log('Whitelist', item)
        setModalLoginOpen(true)
    }

    const onSelectSupershare = (item: ScoreInterface) => {
        console.log('Supershare', item)
        setModalLoginOpen(true)
    }

    return (
        <>
            <AppHead title="Whitelist" />
            <Container>
                <AboutWhitelist />
                <Participate
                    scoreItems={whitelistItems}
                    onSelect={onSelectWhitelist}
                />
                <Supershare
                    scoreItems={superShareItems}
                    onSelect={onSelectSupershare}
                />
                <GoldListRegister onSubmit={onSubmitGoldListForm} />
            </Container>

            <AuthModal
                isOpen={isModalLoginOpen}
                onClose={() => setModalLoginOpen(false)}
                onBackdropClick={() => setModalLoginOpen(false)}
            />
        </>
    )
}

export default WhiteList
