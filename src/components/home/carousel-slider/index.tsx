import React from 'react'
import { Container, Content, Image, Title, Button } from './styles'
import ImageOne from '@/assets/images/home/bg-home-1.png'
import ImageTwo from '@/assets/images/home/bg-home-2.png'
import ImageThree from '@/assets/images/home/bg-home-3.png'
import ImageFour from '@/assets/images/home/bg-home-4.png'
import AppCarousel, { CarouselItem } from '@/components/common/app-carolsel'

const CarouselSlider: React.FC = () => {
    const slides = [
        {
            text: `Nossa missão é democratizar investimentos antes inalcançáveis!`,
            image: ImageOne
        },
        {
            text: `Democratizar é ouvir a comunidade e todos os investidores terem voz ativa nas decisões!`,
            image: ImageTwo
        },
        {
            text: `Seja um Super Share e tenha vantagens exclusivas para sempre!`,
            image: ImageThree
        },
        {
            text: `Diversifique seus investimentos de maneira simples e segura!`,
            image: ImageFour
        }
    ]

    return (
        <Container>
            <AppCarousel>
                {slides.map((item, index) => (
                    <CarouselItem key={index}>
                        <Content>
                            <Image src={item.image} />

                            <div>
                                <Title>{item.text}</Title>
                                <Button>PARTICIPAR DA WHITELIST</Button>
                            </div>
                        </Content>
                    </CarouselItem>
                ))}
            </AppCarousel>
        </Container>
    )
}

export default CarouselSlider
