import React from 'react'
import locales from '@/locales/pages/whitelist'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'

import { Container, Card } from './styles'
import AppSection from '@/components/common/app-section'

const AboutWhitelist: React.FC = () => {
    const translate = useTranslate<WhitelistTranslateType>(locales)

    return (
        <Container>
            <AppSection
                title={translate.about}
                contentClass="opacity-50 pointer-events-none"
            >
                <Card>{translate.aboutContent}</Card>
            </AppSection>
        </Container>
    )
}

export default AboutWhitelist
