import React from 'react'
import locale from '@/locales/pages/about'
import { Container, Content, Title } from './styles'
import { AboutTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import BubbleBG from '@/components/common/bubble-bg'
import AppSection from '@/components/common/app-section'

const SpotlightTitle: React.FC = () => {
    const translate = useTranslate<AboutTranslateType>(locale)

    return (
        <BubbleBG count={100} minSize={10} maxSize={12} color="#5558CA">
            <Container>
                <Content>
                    <AppSection title={translate.whoWeAre}>
                        <Title>{translate.aboutCryptoshare}</Title>
                    </AppSection>
                </Content>
            </Container>
        </BubbleBG>
    )
}

export default SpotlightTitle
