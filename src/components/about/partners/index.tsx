import React from 'react'
import locale from '@/locales/pages/about'
import { AboutTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import AppSection from '@/components/common/app-section'
import SeisInSeteLogo from '@/assets/images/partners/6in7.png'

import { Container, Content, CardImage, Image } from './styles'
import AppBackgroundBubble from '@/components/common/app-background-bubble'

const Partners: React.FC = () => {
    const translate = useTranslate<AboutTranslateType>(locale)

    const partners = [
        {
            image: SeisInSeteLogo,
            link: 'https://6in7.com.br/',
            mode: 'contain',
            name: '6In7'
        }
    ]

    const goToPartner = (link: string) => window.open(link, '_blank')

    return (
        <AppBackgroundBubble count={125} maxSize={12}>
            <Container>
                <AppSection title={translate.ourPartners}>
                    <Content>
                        {partners.map((partner, index) => (
                            <CardImage
                                key={index}
                                title={partner.name}
                                className={partner.mode}
                                onClick={() => goToPartner(partner.link)}
                            >
                                <Image alt={partner.name} src={partner.image} />
                            </CardImage>
                        ))}
                    </Content>
                </AppSection>
            </Container>
        </AppBackgroundBubble>
    )
}

export default Partners
