import React from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import locales from '@/locales/pages/whitelist'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'
import AppSection from '@/components/common/app-section'
import { WhitelistService } from '@/services/whitelist.service'
import {
    Card,
    Form,
    Label,
    Input,
    Button,
    Container,
    FormGroup,
    ScoreCard,
    ScoreTitle,
    ScoreSubtitle,
    ScoreTitleBox,
    ScoreCardIcon,
    ScoreCardTitle,
    ScoreCardValue,
    ScoreCardAction,
    ScoreCardButton,
    ScoreTitleBadge,
    ScoreTitleContent
} from '@/styles/pages/whitelist'
import {
    FaLink,
    FaTwitter,
    FaDiscord,
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane
} from 'react-icons/fa'
import { BsFillTriangleFill } from 'react-icons/bs'

const WhiteList: React.FC = () => {
    const translate = useTranslate<WhitelistTranslateType>(locales)
    const whitelistService = new WhitelistService()
    const { register, handleSubmit } = useForm()
    const marginBottomSection = 'mb-12'

    const onSubmit = async (data: any) => {
        const response = await whitelistService.sendEmail(data.email)
        console.log('RESPONSE :::', response)
    }

    const whitelistItems = [
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

    const superShareItems = [
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
            <Head>
                <title>Whitelist - Crypto Share</title>
            </Head>

            <Container>
                <AppSection
                    title={translate.about}
                    containerClass={marginBottomSection}
                >
                    <Card>{translate.aboutContent}</Card>
                </AppSection>

                <AppSection
                    separatorClass="mb-5"
                    titleClass="mb-5 items-start"
                    containerClass={marginBottomSection}
                    title={
                        <ScoreTitleContent>
                            <ScoreTitleBox>
                                <ScoreTitle>{translate.participate}</ScoreTitle>
                                <ScoreSubtitle>
                                    {translate.participateSubTitle}
                                </ScoreSubtitle>
                            </ScoreTitleBox>

                            <ScoreTitleBadge>
                                0 {translate.score}
                            </ScoreTitleBadge>
                        </ScoreTitleContent>
                    }
                >
                    {whitelistItems.map((item, index) => (
                        <ScoreCard key={index}>
                            <ScoreCardIcon>{item.icon}</ScoreCardIcon>
                            <ScoreCardTitle>{item.title}</ScoreCardTitle>
                            <ScoreCardValue>
                                <i>
                                    <BsFillTriangleFill />
                                </i>
                                +{item.score} {translate.score}
                            </ScoreCardValue>
                            <ScoreCardAction>
                                <ScoreCardButton>
                                    {translate.accomplish}
                                </ScoreCardButton>
                            </ScoreCardAction>
                        </ScoreCard>
                    ))}
                </AppSection>

                <AppSection
                    title={translate.becomeSupershare}
                    containerClass={marginBottomSection}
                >
                    <Card>{translate.becomeSupershareContent}</Card>

                    {superShareItems.map((item, index) => (
                        <ScoreCard key={index}>
                            <ScoreCardIcon>{item.icon}</ScoreCardIcon>
                            <ScoreCardTitle>{item.title}</ScoreCardTitle>
                            <ScoreCardValue>
                                <i>
                                    <BsFillTriangleFill />
                                </i>
                                +{item.score} {translate.score}
                            </ScoreCardValue>
                            <ScoreCardAction>
                                <ScoreCardButton>
                                    {translate.accomplish}
                                </ScoreCardButton>
                            </ScoreCardAction>
                        </ScoreCard>
                    ))}
                </AppSection>

                <AppSection
                    title={translate.openingGoldList}
                    subtitle="25/03/2022"
                    containerClass={marginBottomSection}
                >
                    <Card>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label>{translate.registerYourEmail}</Label>
                                <Input {...register('email')} />
                            </FormGroup>

                            <Button type="submit">
                                {translate.registerInterest}
                            </Button>
                        </Form>
                    </Card>
                </AppSection>
            </Container>
        </>
    )
}

export default WhiteList
