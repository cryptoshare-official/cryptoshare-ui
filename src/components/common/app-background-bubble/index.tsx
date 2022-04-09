import React from 'react'
import { Container, Content, Bubbles, Bubble } from './styles'

interface BubbleBGProps {
    count: number
    color?: string
    minSize?: number
    maxSize?: number
}

const BubbleBG: React.FC<BubbleBGProps> = props => {
    const { children, count, color, minSize, maxSize } = props

    const buildBubble = (index: number) => {
        const random = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min + 1) + min)

        const size = random(minSize || 8, maxSize || 132)
        const bubbleStyle = {
            width: `${size}px`,
            height: `${size}px`,
            background: color || '#68666647',
            left: `${random(0, 100)}%`,
            animationDelay: `${random(0, 5)}s`,
            animationDuration: `${random(12, 18)}s`
        }

        return <Bubble key={index} style={bubbleStyle} />
    }

    const renderBubble = () => {
        const bubbles = []
        for (let i = 0; i < count; i++) {
            bubbles.push(buildBubble(i))
        }

        return bubbles
    }

    return (
        <Container>
            <Bubbles>{renderBubble()}</Bubbles>

            <Content>{children}</Content>
        </Container>
    )
}

export default BubbleBG
