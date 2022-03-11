import React from 'react'
import { Container, Content } from './styles'

interface AppGradientContainerProps {
    contentClass?: string
    containerClass?: string
}

const AppGradientContainer: React.FC<AppGradientContainerProps> = props => {
    return (
        <Container className={props.containerClass}>
            <Content className={props.contentClass}>{props.children}</Content>
        </Container>
    )
}

export default AppGradientContainer
