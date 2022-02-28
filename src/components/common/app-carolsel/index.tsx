import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import {
    Dot,
    Prev,
    Content,
    Container,
    ControlsContainer,
    CarolselItemContainer
} from './styles'

interface AppCarouselProps {
    delay?: number
    pauseOnHover?: boolean
    disableAutoPlay?: boolean
    controlContainerClass?: string
}

export const CarouselItem: React.FC = ({ children }) => {
    return <CarolselItemContainer>{children}</CarolselItemContainer>
}

const AppCarousel: React.FC<AppCarouselProps> = props => {
    const { children, pauseOnHover, disableAutoPlay, delay } = props

    const { Children, cloneElement } = React
    const [paused, setPaused] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const styleContent = { transform: `translateX(-${activeIndex * 100}%)` }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    })

    useEffect(() => {
        if (disableAutoPlay) return
        const time = delay || 4500

        const interval = setInterval(() => {
            if (!paused) updateIndex(activeIndex + 1)
        }, time)

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

            <ControlsContainer className={props.controlContainerClass}>
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
