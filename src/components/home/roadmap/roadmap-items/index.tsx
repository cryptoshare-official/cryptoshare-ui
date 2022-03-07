import React from 'react'
import { Article, Item, ItemDate, ItemLabel } from './styles'
import { RoadmapItemInterface } from '@/components/home/roadmap/@types'

interface RoadmapItemsProps {
    items: RoadmapItemInterface[]
    isCompleted: boolean
}

const RoadmapItems: React.FC<RoadmapItemsProps> = ({ items, isCompleted }) => {
    return (
        <Article>
            {items.map(({ date, description }, index) => (
                <Item key={index} className={isCompleted ? 'completed' : ''}>
                    <ItemDate>{date}</ItemDate>
                    <ItemLabel>{description}</ItemLabel>
                </Item>
            ))}
        </Article>
    )
}

export default RoadmapItems
