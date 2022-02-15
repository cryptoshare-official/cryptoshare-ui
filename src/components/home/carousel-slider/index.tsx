import React from 'react'
import { Container } from './styles'
import BgImage from '@/assets/images/home/bg-home.png'

const CarouselSlider: React.FC = () => {
    return (
        <Container>
            <img src={BgImage} />
        </Container>
    )
}

export default CarouselSlider
