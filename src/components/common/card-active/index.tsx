import React from 'react'
import { Container, Separator, Title, Text, Icon } from './styles'

interface CardActiveProps {
    icon: string
    title: string
    description: string
}

const CardActive: React.FC<CardActiveProps> = props => {
    return (
        <Container>
            <Icon src={props.icon} />

            <Title>{props.title}</Title>
            <Separator />
            <Text>{props.description}</Text>
        </Container>
    )
}

export default CardActive
