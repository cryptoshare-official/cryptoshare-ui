import React from 'react'

import { Container, Span, Overlay, Left, Right } from './styles'

const CircleProgressBar: React.FC = () => {
    return (
        <Container>
            <Span data-from="0" data-to="50" data-speed="1500">
                50
            </Span>

            <Overlay />
            <Left />
            <Right className="right" />
        </Container>
    )
}
export default CircleProgressBar
