import React from 'react'
import locale from '@/locales/pages/about'
import { useTranslate } from '@/hooks/translate.hook'
import { AboutTranslateType } from '@/locales/types'
import AppSection from '@/components/common/app-section'

import { Container, Content, Image } from './styles'
import BubbleBG from '@/components/common/bubble-bg'

const Partners: React.FC = () => {
    const translate = useTranslate<AboutTranslateType>(locale)
    const fakeURI =
        'https://public.bnbstatic.com/image/cms/blog/20210802/08a2242e-a7e7-49cf-85e6-df0431389b55.png'

    const partners = [
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' },
        { uri: fakeURI, name: 'Binance' }
    ]

    return (
        <BubbleBG count={100} minSize={10} maxSize={12}>
            <Container>
                <AppSection title={translate.ourPartners}>
                    <Content>
                        {partners.map((partner, index) => (
                            <Image src={partner.uri} alt="teste" key={index} />
                        ))}
                    </Content>
                </AppSection>
            </Container>
        </BubbleBG>
    )
}

export default Partners
