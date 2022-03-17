import {
    FaLink,
    FaTwitter,
    FaDiscord,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane
} from 'react-icons/fa'
import React, { useState } from 'react'
import locales from '@/locales/pages/whitelist'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/whitelist'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'
import Supershare from '@/components/whitelist/supershare'
import Participate from '@/components/whitelist/participate'
import AuthModal from '@/components/common/modals/auth-modal'
import { WhitelistService } from '@/services/whitelist.service'
import AlertModal from '@/components/common/modals/alert-modal'
import { ScoreInterface } from '@/interfaces/whitelist.interface'
import AboutWhitelist from '@/components/whitelist/about-whitelist'
import GoldListRegister from '@/components/whitelist/gold-list-register'
import { GoogleAnalyticsService } from '@/services/google-analytics.service'

interface AlertInterface {
    message: string
    type: 'success' | 'error' | 'warning'
}

const WhiteList: React.FC = () => {
    const whitelistService = new WhitelistService()
    const googleAnalyticsService = new GoogleAnalyticsService()

    const [isModalLoginOpen, setModalLoginOpen] = useState(false)
    const [isModalAlertOpen, setModalAlertOpen] = useState(false)
    const translate = useTranslate<WhitelistTranslateType>(locales)
    const [modalAlertData, setModalAlertData] = useState<AlertInterface>(
        {} as AlertInterface
    )

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

    const onSubmitGoldListForm = async (data: { email: string }) => {
        try {
            await whitelistService.sendEmail(data.email)

            const message = translate.emailRegisteredSuccessfully
            setModalAlertData({ message, type: 'success' })
        } catch (error) {
            const exception: any = error as any
            const { message } = exception.response.data
            setModalAlertData({ message, type: 'error' })
        } finally {
            setModalAlertOpen(true)
            googleAnalyticsService.emit('click_register_email', data.email)
        }
    }

    const onSelectWhitelist = (item: ScoreInterface) => {
        console.log('Whitelist', item)
    }

    const onSelectSupershare = (item: ScoreInterface) => {
        console.log('Supershare', item)
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

            <AlertModal
                isOpen={isModalAlertOpen}
                type={modalAlertData.type}
                message={modalAlertData.message}
                onClose={() => setModalAlertOpen(false)}
                onBackdropClick={() => setModalAlertOpen(false)}
            />
        </>
    )
}

export default WhiteList
