import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import {
    Dot,
    Content,
    Container,
    ControlsContainer,
    CarolselItemContainer
} from './styles'

export const CarouselItem: React.FC = ({ children }) => {
    return <CarolselItemContainer>{children}</CarolselItemContainer>
}

interface AppCarouselProps {
    pauseOnHover?: boolean
}

const AppCarousel: React.FC<AppCarouselProps> = props => {
    const { children, pauseOnHover } = props
    const { Children, cloneElement } = React
    const [paused, setPaused] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const styleContent = { transform: `translateX(-${activeIndex * 100}%)` }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) updateIndex(activeIndex + 1)
        }, 3000)

        return () => {
            if (interval) clearInterval(interval)
        }
    })

    const updateIndex = (newIndex: number) => {
        if (newIndex < 0) newIndex = React.Children.count(children) - 1
        else if (newIndex >= React.Children.count(children)) newIndex = 0

        setActiveIndex(newIndex)
    }

    return (
        <Container
            {...handlers}
            onMouseEnter={() => (pauseOnHover ? setPaused(true) : null)}
            onMouseLeave={() => (pauseOnHover ? setPaused(false) : null)}
        >
            <Content style={styleContent}>
                {Children.map(children, (child: any) => cloneElement(child))}
            </Content>

            <ControlsContainer>
                <Dot onClick={() => updateIndex(activeIndex - 1)} />

                {React.Children.map(children, (child, index) => (
                    <Dot
                        onClick={() => updateIndex(index)}
                        className={`${index === activeIndex ? 'active' : ''}`}
                    />
                ))}
            </ControlsContainer>
        </Container>
    )
}

export default AppCarousel
