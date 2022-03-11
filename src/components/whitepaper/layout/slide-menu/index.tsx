import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SubItemModal from './subItem-modal'
import { Container, Group, Item, Icon, Label, Badge } from './styles'
import {
    ItemInterface,
    MenuItemsInterface
} from '@/components/whitepaper/layout/@types'

interface SideMenuProps {
    items: MenuItemsInterface[]
    onSelect: (route: string) => void
}

const SlideMenu: React.FC<SideMenuProps> = ({ items, onSelect }) => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState('')
    const [currentItems, setCurrentItems] = useState<ItemInterface[]>([])

    useEffect(() => {
        currentItemControl()
    }, [router.pathname])

    const currentItemControl = () => {
        const { pathname } = router

        if (pathname === '/whitepaper') setCurrentItem('Whitepaper')
        const checkItem = (route: string) => `/whitepaper/${route}` === pathname

        const currentItem = items.find(({ route }) => checkItem(route))

        const currentSubItemParent = items.find(({ subItems }) => {
            return subItems.find(({ route }) => checkItem(route))
        })

        if (currentItem) setCurrentItem(currentItem.name)
        else if (currentSubItemParent) {
            const { subItems, name } = currentSubItemParent
            const currentSubItem = subItems.find(({ route }) =>
                checkItem(route)
            )

            if (currentSubItem)
                setCurrentItem(`${name} > ${currentSubItem.name}`)
        }
    }

    const onSelectItem = (item: MenuItemsInterface) => {
        if (!item.subItems.length) onSelect(item.route)
        else {
            setCurrentItems(item.subItems)
            setIsOpen(true)
        }
    }

    const onCloseModal = () => setIsOpen(false)
    const onSelectSubItem = (item: ItemInterface) => {
        onSelect(item.route)
        onCloseModal()
    }

    return (
        <Container>
            <Badge>{currentItem}</Badge>
            <Group>
                {items.map((item, index) => (
                    <Item key={index} onClick={() => onSelectItem(item)}>
                        <Icon>{item.icon}</Icon>
                        <Label>{item.name}</Label>
                    </Item>
                ))}
            </Group>

            <SubItemModal
                isOpen={isOpen}
                items={currentItems}
                onClose={onCloseModal}
                onSelect={onSelectSubItem}
            />
        </Container>
    )
}

export default SlideMenu
