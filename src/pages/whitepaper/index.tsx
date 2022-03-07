import React from 'react'
import locale from '@/locales/pages/whitepaper'
import AppHead from '@/components/common/app-head'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitepaperTranslateType } from '@/locales/types'
import { Container, Title, Content } from '@/styles/pages/whitepaper'

const Whitepaper: React.FC = () => {
    const translate = useTranslate<WhitepaperTranslateType>(locale)
    const __html = translate.content

    return (
        <>
            <AppHead title="Whitepaper" />
            <Container>
                <Title>{translate.title}</Title>
                <Content dangerouslySetInnerHTML={{ __html }}></Content>
            </Container>
        </>
    )
}

export default Whitepaper
