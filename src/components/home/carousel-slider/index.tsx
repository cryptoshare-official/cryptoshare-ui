import React from 'react'
import { useRouter } from 'next/router'
import locale from '@/locales/pages/home'
import { useTranslate } from '@/hooks/translate.hook'
import { HomeTranslateType } from '@/locales/types'
import ImageOne from '@/assets/images/home/bg-home-1.png'
import ImageTwo from '@/assets/images/home/bg-home-2.png'
import ImageThree from '@/assets/images/home/bg-home-3.png'
import ImageFour from '@/assets/images/home/bg-home-4.png'
import {
    BackgroundContainer,
    Container,
    Content,
    Image,
    Title,
    Button,
    Div
} from './styles'
import AppCarousel, { CarouselItem } from '@/components/common/app-carolsel'

const CarouselSlider: React.FC = () => {
    const router = useRouter()
    const translate = useTranslate<HomeTranslateType>(locale)

    const slides = [
        { text: translate.ourMission, image: ImageOne },
        { text: translate.democratizingIsListening, image: ImageTwo },
        { text: translate.benefitsSuperShare, image: ImageThree },
        { text: translate.diversifyYourInvestments, image: ImageFour }
    ]

    return (
        <BackgroundContainer>
            <Container>
                <AppCarousel controlContainerClass="ml-12 sm:ml-5">
                    {slides.map((item, index) => (
                        <CarouselItem key={index}>
                            <Content>
                                <Image src={item.image} />

                                <Div>
                                    <Title>{item.text}</Title>
                                    <Button
                                        onClick={() =>
                                            router.push('/whitelist')
                                        }
                                    >
                                        {translate.joinTheWhitelist}
                                    </Button>
                                </Div>
                            </Content>
                        </CarouselItem>
                    ))}
                </AppCarousel>
            </Container>
        </BackgroundContainer>
    )
}

export default CarouselSlider
