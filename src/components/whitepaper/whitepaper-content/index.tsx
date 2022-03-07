import React from 'react'
import { Title, Content } from '@/styles/pages/whitepaper'

interface WhitepaperContentProps {
    title: string
    content: string
}

const WhitepaperContent: React.FC<WhitepaperContentProps> = props => {
    const { title, content: __html } = props

    return (
        <>
            <Title>{title}</Title>
            <Content dangerouslySetInnerHTML={{ __html }}></Content>
        </>
    )
}

export default WhitepaperContent
