import React from 'react'
import locale from '@/locales/pages/home'
import { HomeTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import CardActive from '@/components/common/card-active'
import { Container, Title, Separator, AssetsGrid } from './styles'

import Building from '@/assets/images/home/icons/building.png'
import Atom from '@/assets/images/home/icons/atom.png'
import Chart from '@/assets/images/home/icons/chart.png'
import Wallet from '@/assets/images/home/icons/wallet.png'

const OurAssets: React.FC = () => {
    const translate = useTranslate<HomeTranslateType>(locale)

    const actives = [
        {
            icon: Building,
            title: translate.propertiesTitle,
            description: translate.propertiesDescription
        },
        {
            icon: Atom,
            title: translate.startupsTitle,
            description: translate.startupsDescription
        },
        {
            icon: Chart,
            title: translate.franchiseTitle,
            description: translate.franchiseDescription
        },
        {
            icon: Wallet,
            title: translate.businessTitle,
            description: translate.businessDescription
        }
    ]

    return (
        <Container id="assets">
            <Title>
                <Separator />
                {translate.ourAssets}
            </Title>

            <AssetsGrid>
                {actives.map((item, index) => (
                    <CardActive
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </AssetsGrid>
        </Container>
    )
}

export default OurAssets
