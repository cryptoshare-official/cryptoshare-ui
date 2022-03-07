import React from 'react'
import { Container, Separator, Title, Text, Icon } from './styles'

interface CardAssetsProps {
    icon: string
    title: string
    description: string
}

const CardAssets: React.FC<CardAssetsProps> = props => {
    return (
        <Container>
            <Icon src={props.icon} />

            <Title>{props.title}</Title>
            <Separator />
            <Text>{props.description}</Text>
        </Container>
    )
}

export default CardAssets
