import React from 'react'
import { useRouter } from 'next/router'
import { Container, Content, Title, Button, ButtonText } from './styles'

const WhiteList: React.FC = () => {
    const router = useRouter()

    return (
        <Container>
            <Content>
                <Title>Participe da Whitelist!</Title>

                <Button onClick={() => router.push('/whitelist')}>
                    <ButtonText>quero participar!</ButtonText>
                </Button>
            </Content>
        </Container>
    )
}

export default WhiteList
