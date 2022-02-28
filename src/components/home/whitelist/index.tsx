import React from 'react'
import { useRouter } from 'next/router'
import locale from '@/locales/pages/home'
import { HomeTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import { Container, Content, Title, Button, ButtonText } from './styles'

const WhiteList: React.FC = () => {
    const router = useRouter()
    const translate = useTranslate<HomeTranslateType>(locale)

    return (
        <Container>
            <Content>
                <Title>{translate.joinTheWhitelist}</Title>

                <Button onClick={() => router.push('/whitelist')}>
                    <ButtonText>{translate.wantParticipate}</ButtonText>
                </Button>
            </Content>
        </Container>
    )
}

export default WhiteList
