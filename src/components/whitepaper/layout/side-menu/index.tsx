import React, { useEffect } from 'react'
import {
    Icon,
    Item,
    Group,
    SubItem,
    SubGroup,
    Container,
    GroupTitle,
    SubContainer
} from './styles'
import { useRouter } from 'next/router'
import { AiFillSound } from 'react-icons/ai'
import { BiDiamond, BiStar } from 'react-icons/bi'
import { GiDeathStar, GiTakeMyMoney } from 'react-icons/gi'
import { FaChevronRight, FaHeartbeat } from 'react-icons/fa'
import { MdDeviceHub, MdSettings, MdStore } from 'react-icons/md'

import { useTranslate } from '@/hooks/translate.hook'
import locale from '@/locales/components/whitepaper/sidemenu'
import { WhitepaperSideMenuTranslateType } from '@/locales/types'
import { MenuItemsInterface } from '@/components/whitepaper/layout/@types'

const SideMenu: React.FC = () => {
    const router = useRouter()
    const translate = useTranslate<WhitepaperSideMenuTranslateType>(locale)

    const items: MenuItemsInterface[] = [
        {
            icon: <BiDiamond />,
            name: translate.purpose,
            route: 'purpose',
            subItems: []
        },
        {
            icon: <GiDeathStar />,
            name: translate.programICO,
            route: 'ico',
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
            icon: <MdDeviceHub />,
            name: translate.partners,
            route: 'partners',
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
            icon: <MdStore />,
            name: translate.marketplace,
            route: 'marketplace',
            subItems: []
        },
        {
            icon: <FaHeartbeat />,
            name: translate.economy,
            route: 'economy',
            subItems: []
        },
        {
            icon: <AiFillSound />,
            name: translate.communication,
            route: 'communication',
            subItems: []
        }
    ]

    useEffect(() => {
        checkExpanded()
    }, [])

    const onSelect = (route: string) => {
        router.push(`/whitepaper/${route}`)
    }

    const isActive = (route: string) => {
        const curretnPath = `/whitepaper/${route}`
        const { pathname } = router

        return pathname === curretnPath
    }

    const checkExpanded = () => {
        const sideMenuEl = document.getElementById('sideMenu') as Element
        const activeElements = sideMenuEl.getElementsByClassName('active')

        if (!activeElements.length) return

        const activeEl = activeElements[0] as Element
        const parentEl = activeEl.parentElement as Element

        if (parentEl.id === 'subContainer') {
            const detailsEl = parentEl.parentElement as HTMLDetailsElement
            if (!detailsEl.open) detailsEl.open = true
        }
    }

    return (
        <Container id="sideMenu">
            <Group>
                {items.map((item, index) => {
                    const simpleItem = (
                        <Item
                            key={index}
                            onClick={() => onSelect(item.route)}
                            className={isActive(item.route) ? 'active' : ''}
                        >
                            <Icon>{item.icon}</Icon>
                            {item.name}
                        </Item>
                    )

                    const groupItem = (
                        <SubGroup key={index}>
                            <GroupTitle>
                                <Icon>{item.icon}</Icon>
                                {item.name}
                                <FaChevronRight />
                            </GroupTitle>

                            <SubContainer id="subContainer">
                                {item.subItems.map((subItem, subIndex) => (
                                    <SubItem
                                        key={subIndex}
                                        onClick={() => onSelect(subItem.route)}
                                        className={
                                            isActive(subItem.route)
                                                ? 'active'
                                                : ''
                                        }
                                    >
                                        <Icon>{subItem.icon}</Icon>
                                        {subItem.name}
                                    </SubItem>
                                ))}
                            </SubContainer>
                        </SubGroup>
                    )

                    return !item.subItems.length ? simpleItem : groupItem
                })}
            </Group>
        </Container>
    )
}

export default SideMenu
