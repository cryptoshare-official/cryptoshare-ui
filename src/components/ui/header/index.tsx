import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Logo from '@/assets/images/logo.png'
import locales from '@/locales/components/header'
import { useTranslate } from '@/hooks/translate.hook'
import { HeaderTranslateType } from '@/locales/types'
import LanguageDropdown from '@/components/language-dropdown'
import {
    Nav,
    Link,
    Button,
    Container,
    LinkGroup,
    OptionsGroup,
    LogoContainer
} from './styles'

const Header: React.FC = () => {
    const translate = useTranslate<HeaderTranslateType>(locales)
    const router = useRouter()

    const links = [
        { name: 'Home', path: '/' },
        { name: translate.active, path: '/' },
        { name: translate.meet, path: '/' },
        { name: 'Roadmap', path: '/' }
    ]

    const headerTranparentRoutes = ['/']

    useEffect(() => transparentHeaderControl())

    const transparentHeaderControl = () => {
        if (!headerTranparentRoutes.includes(router.pathname)) return

        const nav = document.getElementById('navHeader')
        const { scrollTop, clientTop } = document.documentElement

        const add = () => nav?.classList.add('transparent-nav')
        const remove = () => nav?.classList.remove('transparent-nav')

        add()

        document.addEventListener('scroll', () => {
            const top = (window.pageYOffset || scrollTop) - (clientTop || 0)
            top <= 115 ? add() : remove()
        })
    }

    return (
        <Nav id="navHeader">
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
                    <Button>{translate.access} Whitepaper</Button>
                    <LanguageDropdown />
                </OptionsGroup>
            </Container>
        </Nav>
    )
}

export default Header
