import React from 'react'
import { Container, Separator, Title, Content, SubTitle } from './styles'

interface AppSectionProps {
    subtitle?: string
    titleClass?: string
    contentClass?: string
    containerClass?: string
    separatorClass?: string
    title?: string | React.ReactNode
}

const AppSection: React.FC<AppSectionProps> = props => {
    const {
        title,
        subtitle,
        children,
        titleClass,
        contentClass,
        separatorClass,
        containerClass
    } = props

    return (
        <Container className={containerClass}>
            {title && (
                <>
                    <Title className={titleClass}>
                        <Separator className={separatorClass} />
                        {title}
                    </Title>

                    <SubTitle>{subtitle}</SubTitle>
                </>
            )}

            <Content className={contentClass}>{children}</Content>
        </Container>
    )
}

export default AppSection
