import React from 'react'
import { Container, Content, Title, Button, ButtonText } from './styles'

const WhiteList: React.FC = () => {
    return (
        <Container>
            <Content>
                <Title>Participe da Whitelist!</Title>

                <Button>
                    <ButtonText>quero participar!</ButtonText>
                </Button>
            </Content>
        </Container>
    )
}

export default WhiteList
