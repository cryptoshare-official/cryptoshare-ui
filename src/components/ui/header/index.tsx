import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '@/assets/images/logo.png'
import locales from '@/locales/components/header'
import { scrollTo } from '@/helpers/scroll.helper'
import { useTranslate } from '@/hooks/translate.hook'
import { HeaderTranslateType } from '@/locales/types'
import { setDelegateHome } from '@/store/reducers/ui.reducer'
import LanguageDropdown from '@/components/language-dropdown'
import { HeaderInterface } from '@/interfaces/header.interface'
import {
    Nav,
    Link,
    Button,
    Container,
    LinkGroup,
    OptionsGroup,
    LogoContainer,
    Hamburguer,
    ResponsiveContainer,
    ResponsiveLinkGroup,
    ResponsiveOptionsGroup
} from './styles'

const Header: React.FC = () => {
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState(false)
    const translate = useTranslate<HeaderTranslateType>(locales)

    const links: HeaderInterface[] = [
        { name: 'Home', path: '/', scrollTo: '' },
        { name: translate.active, path: '', scrollTo: 'assets' },
        { name: translate.meet, path: '', scrollTo: 'meet' },
        { name: 'Roadmap', path: '', scrollTo: 'roadmap' }
    ]

    const headerTranparentRoutes = ['/']

    useEffect(() => transparentHeaderControl())
    useEffect(() => {
        if (openMenu) {
            const nav = document.getElementById('navHeader')
            nav?.classList.remove('transparent-nav')
        }
    }, [openMenu])

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
            setOpenMenu(false)
        })
    }

    const onClickLink = (link: HeaderInterface) => {
        setOpenMenu(false)

        const isHome = router.pathname === '/'

        if (link.path === '/' && isHome) window.scroll(0, 0)
        else if (isHome && link.scrollTo) scrollTo(link.scrollTo)
        else if (!link.scrollTo) router.push(link.path)
        else {
            setDelegateHome(link.scrollTo)
            router.push('/')
        }
    }

    const toggleMenu = () => setOpenMenu(!openMenu)

    const goTo = (path: string) => {
        setOpenMenu(false)
        router.push(path)
    }

    return (
        <Nav id="navHeader">
            <Container>
                <LogoContainer>
                    <img src={Logo} alt="Crypto Share" />
                </LogoContainer>

                <LinkGroup>
                    {links.map((item, index) => (
                        <Link key={index} onClick={() => onClickLink(item)}>
                            {item.name}
                        </Link>
                    ))}
                </LinkGroup>

                <OptionsGroup>
                    <Button onClick={() => router.push('/whitepaper')}>
                        {translate.access} Whitepaper
                    </Button>
                    <LanguageDropdown />
                </OptionsGroup>

                <Hamburguer onClick={() => toggleMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </Hamburguer>
            </Container>

            {openMenu && (
                <ResponsiveContainer>
                    <ResponsiveLinkGroup>
                        {links.map((item, index) => (
                            <Link key={index} onClick={() => onClickLink(item)}>
                                {item.name}
                            </Link>
                        ))}
                    </ResponsiveLinkGroup>

                    <ResponsiveOptionsGroup>
                        <Button onClick={() => goTo('/whitepaper')}>
                            {translate.access} Whitepaper
                        </Button>

                        <LanguageDropdown />
                    </ResponsiveOptionsGroup>
                </ResponsiveContainer>
            )}
        </Nav>
    )
}

export default Header
