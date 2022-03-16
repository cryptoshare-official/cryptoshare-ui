import React from 'react'
import AppHead from '@/components/common/app-head'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitepaperCryptocurrenciesTranslateType } from '@/locales/types'
import locale from '@/locales/pages/whitepaper/economy/cryptocurrencies'
import {
    Box,
    Card,
    Title,
    CardGrid,
    Container,
    Paragraph,
    CardImage,
    CardTitle,
    ImageContainer
} from '@/styles/pages/whitepaper/cryptocurrencies'

import CRYSHALogo from '@/assets/images/currencies/crysha.png'
import GOSHALogo from '@/assets/images/currencies/gosha.png'
import BUSDLogo from '@/assets/images/currencies/busd.png'
import USDTLogo from '@/assets/images/currencies/usdt.png'

const WhitepaperEconomyCryptocurrencies: React.FC = () => {
    const translate =
        useTranslate<WhitepaperCryptocurrenciesTranslateType>(locale)
    const items = [
        {
            logo: CRYSHALogo,
            title: 'CRYSHA',
            description: translate.cryshaDescription
        },
        {
            logo: GOSHALogo,
            title: 'GOSHA',
            description: translate.goshaDescription
        },
        {
            logo: BUSDLogo,
            title: 'BUSD',
            description: translate.busdDescription
        },
        {
            logo: USDTLogo,
            title: 'USDT',
            description: translate.usdtDescription
        }
    ]

    return (
        <>
            <AppHead title="Whitepaper" />
            <Container>
                <Title>{translate.title}</Title>

                <CardGrid>
                    {items.map((item, index) => (
                        <Card key={index}>
                            <Box>
                                <ImageContainer>
                                    <CardImage
                                        src={item.logo}
                                        alt={item.title}
                                    />
                                </ImageContainer>

                                <CardTitle>{item.title}</CardTitle>
                            </Box>
                            <Paragraph>{item.description}</Paragraph>
                        </Card>
                    ))}
                </CardGrid>
            </Container>
        </>
    )
}

export default WhitepaperEconomyCryptocurrencies
