import React from 'react'
import Logo from '@/assets/images/logo-white.png'
import {
    Container,
    Article,
    Separator,
    Small,
    IconGroup,
    Content
} from './styles'
import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
    FaDiscord
} from 'react-icons/fa'

const Footer: React.FC = () => {
    const socialItems = [
        {
            title: 'Discord',
            icon: <FaDiscord />,
            link: 'https://discord.gg/8Smuuf3c'
        },
        { title: 'Facebook', icon: <FaFacebookF />, link: '' },
        { title: 'Twitter', icon: <FaTwitter />, link: '' },
        {
            title: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://instagram.com/cryptoshare_official_portugues?utm_medium=copy_link'
        },
        {
            title: 'Telegram',
            icon: <FaTelegramPlane />,
            link: 'https://t.me/crypto_share_portugues'
        }
    ]

    const openLink = (url: string) => window.open(url, '_blank')?.focus()
    return (
        <Container>
            <Content>
                <Article>
                    <img src={Logo} alt="Crypto Share" />

                    <IconGroup>
                        {socialItems.map((item, index) => (
                            <i
                                onClick={() => openLink(item.link)}
                                title={item.title}
                                key={index}
                            >
                                {item.icon}
                            </i>
                        ))}
                    </IconGroup>
                </Article>

                <Separator />
                <Small>2022 Cryptoshare - Todos os direitos reservados</Small>
            </Content>
        </Container>
    )
}

export default Footer
