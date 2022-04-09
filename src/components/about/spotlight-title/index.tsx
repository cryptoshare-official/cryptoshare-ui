import React from 'react'
import locale from '@/locales/pages/about'
import { Container, Content, Title } from './styles'
import { AboutTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import AppSection from '@/components/common/app-section'
import BackgroundLines from '@/assets/images/background-lines.png'

const SpotlightTitle: React.FC = () => {
    const translate = useTranslate<AboutTranslateType>(locale)

    return (
        <Container style={{ backgroundImage: BackgroundLines }}>
            <Content>
                <AppSection title={translate.whoWeAre}>
                    <Title>{translate.aboutCryptoshare}</Title>
                </AppSection>
            </Content>
        </Container>
    )
}

export default SpotlightTitle
