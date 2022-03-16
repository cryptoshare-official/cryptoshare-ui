import React from 'react'
import SideMenu from './side-menu'
import SlideMenu from './slide-menu'
import { useRouter } from 'next/router'
import { Container, Main } from './styles'
import Layout from '@/components/ui/layout'

import { BsCoin } from 'react-icons/bs'
import { GiDeathStar, GiTakeMyMoney } from 'react-icons/gi'
import { BiDiamond, BiHomeCircle, BiStar, BiTransferAlt } from 'react-icons/bi'
import { MdDeviceHub, MdSettings, MdStore } from 'react-icons/md'
import { FaHandsHelping, FaHeartbeat, FaUsers } from 'react-icons/fa'

import { useTranslate } from '@/hooks/translate.hook'
import locale from '@/locales/components/whitepaper/sidemenu'
import { WhitepaperSideMenuTranslateType } from '@/locales/types'
import { MenuItemsInterface } from '@/components/whitepaper/layout/@types'

const WhitepaperLayout: React.FC = ({ children }) => {
    const router = useRouter()

    const translate = useTranslate<WhitepaperSideMenuTranslateType>(locale)

    const items: MenuItemsInterface[] = [
        {
            icon: <BiHomeCircle />,
            name: translate.introduction,
            route: '',
            subItems: []
        },
        {
            icon: <BiDiamond />,
            name: translate.purpose,
            route: 'purpose',
            subItems: []
        },
        {
            icon: <BiStar />,
            name: translate.assets,
            route: '',
            subItems: [
                {
                    icon: <BiStar />,
                    route: 'assets/real-estate',
                    name: translate.cryptoRealEstate
                },
                {
                    icon: <BiStar />,
                    route: 'assets/startup',
                    name: translate.cryptoStatup
                },
                {
                    icon: <BiStar />,
                    route: 'assets/franchise',
                    name: translate.cryptoFranchise
                },
                {
                    icon: <BiStar />,
                    route: 'assets/business',
                    name: translate.cryptoBusiness
                },
                {
                    icon: <BiStar />,
                    route: 'assets/profit-sharing',
                    name: translate.profitSharing
                }
            ]
        },
        {
            icon: <FaHeartbeat />,
            name: translate.economy,
            route: '',
            subItems: [
                {
                    icon: <BsCoin />,
                    name: translate.cryptocurrencies,
                    route: 'economy/cryptocurrencies'
                },
                {
                    icon: <FaUsers />,
                    name: translate.members,
                    route: 'economy/members'
                },
                {
                    icon: <GiDeathStar />,
                    name: translate.icoProgram,
                    route: 'economy/ico-program'
                },
                {
                    icon: <GiDeathStar />,
                    name: translate.idoProgram,
                    route: 'economy/ido-program'
                },
                {
                    icon: <BiTransferAlt />,
                    name: translate.financialOperations,
                    route: 'economy/financial-operations'
                }
            ]
        },
        {
            icon: <MdDeviceHub />,
            name: translate.partners,
            route: 'partners',
            subItems: []
        },
        {
            icon: <MdStore />,
            name: translate.marketplace,
            route: 'marketplace',
            subItems: []
        },
        {
            icon: <GiTakeMyMoney />,
            name: translate.lottery,
            route: 'lottery',
            subItems: []
        },
        {
            icon: <MdSettings />,
            name: translate.technology,
            route: 'technology',
            subItems: []
        },
        {
            icon: <FaHandsHelping />,
            name: translate.philanthropy,
            route: 'philanthropy',
            subItems: []
        }
    ]

    const onSelect = (route: string) => router.push(`/whitepaper/${route}`)

    return (
        <Layout>
            <Container>
                <SideMenu items={items} onSelect={onSelect} />
                <SlideMenu items={items} onSelect={onSelect} />

                <Main>{children}</Main>
            </Container>
        </Layout>
    )
}

export default WhitepaperLayout
