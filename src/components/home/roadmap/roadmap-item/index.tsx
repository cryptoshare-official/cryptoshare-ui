import React from 'react'
import { Article, Item, ItemDate, ItemLabel } from './styles'
import { RoadmapItemInterface } from '@/components/home/roadmap/@types'

interface RoadmapItemProps {
    items: RoadmapItemInterface[]
    isCompleted: boolean
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ items, isCompleted }) => {
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

export default RoadmapItem
