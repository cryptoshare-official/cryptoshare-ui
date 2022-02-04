import React from 'react'
import Link from 'next/link'
import { Container, LogoContainer, LinkGroup, OptionsGroup } from './styles'

const Header: React.FC = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Login', path: '/login' }
    ]

    return (
        <Container>
            <LogoContainer>Logo Aqui</LogoContainer>

            <LinkGroup>
                {links.map(({ path, name }, index) => (
                    <Link href={path} key={index}>
                        {name}
                    </Link>
                ))}
            </LinkGroup>

            <OptionsGroup>
                <div></div>
                <div></div>
                <article></article>
            </OptionsGroup>
        </Container>
    )
}

export default Header
