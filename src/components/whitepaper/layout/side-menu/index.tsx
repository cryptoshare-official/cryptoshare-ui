import React, { useEffect } from 'react'
import {
    Icon,
    Item,
    Group,
    Title,
    SubItem,
    SubGroup,
    Container,
    Separator,
    GroupTitle,
    SubContainer
} from './styles'
import { useRouter } from 'next/router'
import { FaChevronRight } from 'react-icons/fa'
import { MenuItemsInterface } from '@/components/whitepaper/layout/@types'
interface SideMenuProps {
    items: MenuItemsInterface[]
    onSelect: (route: string) => void
}

const SideMenu: React.FC<SideMenuProps> = ({ items, onSelect }) => {
    const router = useRouter()

    useEffect(() => {
        checkExpanded()
    }, [])

    const isActive = (route: string) => {
        const curretnPath = `/whitepaper${route ? `/${route}` : ''}`
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
            <Title onClick={() => router.push(`/whitepaper`)}>
                Whitepaper
                <Separator />
            </Title>

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
