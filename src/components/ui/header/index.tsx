import React from 'react'
import Logo from '../../../assets/images/logo.png'
import LanguageDropdown from '@/components/language-dropdown'
import {
    Container,
    LogoContainer,
    LinkGroup,
    OptionsGroup,
    Link
} from './styles'

const Header: React.FC = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Login', path: '/login' },
        { name: 'Ativos', path: '/' },
        { name: 'Conheça', path: '/' },
        { name: 'Roadmap', path: '/' }
    ]

    return (
        <Container>
            <LogoContainer>
                <img src={Logo} alt="Crypto Share" />
            </LogoContainer>

            <LinkGroup>
                {links.map(({ path, name }, index) => (
                    <Link href={path} key={index}>
                        {name}
                    </Link>
                ))}
            </LinkGroup>

            <OptionsGroup>
                <LanguageDropdown />
            </OptionsGroup>
        </Container>
    )
}

export default Header
