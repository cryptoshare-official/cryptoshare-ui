import React from 'react'
import locale from '@/locales/pages/home'
import { HomeTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import Leaf from '@/assets/images/home/icons/leaf.png'
import Puzzle from '@/assets/images/home/icons/puzzle.png'
import Octagon from '@/assets/images/home/icons/octagon.png'
import {
    Card,
    Grid,
    Icon,
    Title,
    Content,
    Separator,
    Container,
    CardTitle,
    CardHeader,
    CardDescription
} from './styles'

const Meet: React.FC = () => {
    const translate = useTranslate<HomeTranslateType>(locale)

    const items = [
        {
            icon: Leaf,
            title: translate.purposeTitle,
            description: translate.purposeDescription
        },
        {
            icon: Octagon,
            title: translate.missionTitle,
            description: translate.missionDescription
        },
        {
            icon: Puzzle,
            title: translate.visionAndValuesTitle,
            description: translate.visionAndValuesDescription
        }
    ]

    return (
        <Container id="meet">
            <Content>
                <Title>
                    <Separator />
                    {translate.getToKnowCryptoshare}
                </Title>

                <Grid>
                    {items.map(({ icon, title, description }, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <Icon src={icon} />
                                <Separator />
                            </CardHeader>

                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </Card>
                    ))}
                </Grid>
            </Content>
        </Container>
    )
}

export default Meet
