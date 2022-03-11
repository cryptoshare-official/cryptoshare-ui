import React from 'react'
import { Container, Item, Icon } from './styles'
import AppModal from '@/components/common/modals/app-modal'
import { ItemInterface } from '@/components/whitepaper/layout/@types'

interface SubItemModalProps {
    isOpen: boolean
    items: ItemInterface[]
    onSelect: (item: ItemInterface) => void
    onClose: () => void
}

const SubItemModal: React.FC<SubItemModalProps> = props => {
    const { isOpen, items, onSelect, onClose } = props

    return (
        <AppModal
            width={300}
            height={200}
            isOpen={isOpen}
            onBackdropClick={onClose}
        >
            <Container>
                {items.map((item, index) => (
                    <Item key={index} onClick={() => onSelect(item)}>
                        <Icon>{item.icon}</Icon>
                        {item.name}
                    </Item>
                ))}
            </Container>
        </AppModal>
    )
}

export default SubItemModal
