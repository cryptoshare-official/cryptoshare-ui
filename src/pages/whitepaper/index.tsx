import React from 'react'
import Logo from '@/assets/images/logo.png'
import AppHead from '@/components/common/app-head'
import { useTranslate } from '@/hooks/translate.hook'
import locale from '@/locales/pages/whitepaper/introduction'
import { WhitepaperIntroductionTranslateType } from '@/locales/types'
import {
    Title,
    Content,
    Paragraph,
    Card,
    CardBody,
    CardTitle,
    CardContainer,
    ImageContainer,
    Image
} from '@/styles/pages/whitepaper'

const Whitepaper: React.FC = () => {
    const translate = useTranslate<WhitepaperIntroductionTranslateType>(locale)
    const items = [
        {
            title: translate.whatIs,
            description: translate.whatIsDescription
        },
        {
            title: translate.whatCanIDoWith,
            description: translate.whatCanIDoDescription
        },
        {
            title: translate.howToGetStartedWith,
            description: translate.howToGetStartedWithDescription
        }
    ]

    return (
        <>
            <AppHead title="Whitepaper" />
            <Content>
                <Title>{translate.title}</Title>

                <Paragraph>{translate.welcome}</Paragraph>

                <CardContainer>
                    {items.map((item, index) => (
                        <Card key={index}>
                            <CardTitle>{item.title}</CardTitle>
                            <CardBody>{item.description}</CardBody>
                        </Card>
                    ))}
                </CardContainer>

                <ImageContainer>
                    <Image src={Logo} alt="CryptoShare" />
                </ImageContainer>
            </Content>
        </>
    )
}

export default Whitepaper
