import React from 'react'
import locale from '@/locales/pages/home'
import { HomeTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'

import {
    Container,
    Content,
    Title,
    Separator,
    Row,
    Text,
    Image,
    RowImages
} from './styles'

import GoldNFT from '@/assets/images/NFT/gold.png'
import IronNFT from '@/assets/images/NFT/iron.png'
import BronzeNFT from '@/assets/images/NFT/bronze.png'
import SilverNFT from '@/assets/images/NFT/silver.png'
import SuperShareNFT from '@/assets/images/NFT/supershare.png'

const MemberHome: React.FC = () => {
    const translate = useTranslate<HomeTranslateType>(locale)

    return (
        <Container>
            <Title>
                <Separator />
                {translate.memberTitle}
            </Title>

            <Content>
                <Row>
                    <Text>{translate.memberIntroduction}</Text>
                    <Image src={SuperShareNFT} alt="SuperShare" />
                </Row>

                <RowImages>
                    <Image src={GoldNFT} alt="Gold" />
                    <Image src={SilverNFT} alt="Silver" />
                    <Image src={BronzeNFT} alt="Bronze" />
                    <Image src={IronNFT} alt="Iron" />
                </RowImages>

                <Text>{translate.memberNFTsDescription}</Text>
            </Content>
        </Container>
    )
}

export default MemberHome
