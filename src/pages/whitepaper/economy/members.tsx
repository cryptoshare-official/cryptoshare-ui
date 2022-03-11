import React from 'react'
import AppHead from '@/components/common/app-head'
import { useTranslate } from '@/hooks/translate.hook'
import locale from '@/locales/pages/whitepaper/economy/members'
import { WhitepaperMembersTranslateType } from '@/locales/types'
import {
    Container,
    Title,
    Paragraph,
    Card,
    Image,
    CardContent
} from '@/styles/pages/whitepaper/members'

import BronzeNFT from '@/assets/images/NFT/bronze.png'
import GoldNFT from '@/assets/images/NFT/gold.png'
import SilverNFT from '@/assets/images/NFT/silver.png'
import IronNFT from '@/assets/images/NFT/iron.png'
import SuperShareNFT from '@/assets/images/NFT/supershare.png'

const WhitepaperEconomyMembers: React.FC = () => {
    const translate = useTranslate<WhitepaperMembersTranslateType>(locale)

    const items = [
        {
            title: 'Super Share',
            image: SuperShareNFT,
            advantage: translate.superShareBenefits,
            description: translate.superShareDescription
        },
        {
            title: 'Gold',
            image: GoldNFT,
            advantage: translate.goldBenefits,
            description: translate.goldDescription
        },
        {
            title: 'Silver',
            image: SilverNFT,
            advantage: translate.silverBenefits,
            description: translate.silverDescription
        },
        {
            title: 'Bronze',
            image: BronzeNFT,
            advantage: translate.bronzeBenefits,
            description: translate.bronzeDescription
        },
        {
            title: 'Iron',
            image: IronNFT,
            advantage: translate.ironBenefits,
            description: translate.ironDescription
        }
    ]

    return (
        <>
            <AppHead title="Whitepaper" />
            <Container>
                <Title>{translate.title}</Title>
                <Paragraph>{translate.description}</Paragraph>

                {items.map((item, index) => (
                    <Card key={index}>
                        <Image src={item.image} />

                        <CardContent>
                            <Paragraph>{item.description}</Paragraph>
                            <Paragraph>{item.advantage}</Paragraph>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default WhitepaperEconomyMembers
