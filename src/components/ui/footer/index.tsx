import React from 'react'
import { getYear } from 'date-fns'
import Logo from '@/assets/images/logo-white.png'
import {
    Small,
    Article,
    Content,
    Container,
    Separator,
    IconGroup
} from './styles'
import {
    FaTwitter,
    FaDiscord,
    FaInstagram,
    FaFacebookF,
    FaTelegramPlane
} from 'react-icons/fa'

const Footer: React.FC = () => {
    const currentYear = getYear(new Date())
    const openLink = (url: string) => window.open(url, '_blank')?.focus()

    const socialItems = [
        {
            title: 'Discord',
            icon: <FaDiscord />,
            link: 'https://discord.gg/8Smuuf3c'
        },
        {
            title: 'Facebook',
            icon: <FaFacebookF />,
            link: 'https://www.facebook.com'
        },
        {
            title: 'Twitter',
            icon: <FaTwitter />,
            link: 'https://www.twitter.com'
        },
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
                <Small>
                    {currentYear} Cryptoshare - Todos os direitos reservados
                </Small>
            </Content>
        </Container>
    )
}

export default Footer
