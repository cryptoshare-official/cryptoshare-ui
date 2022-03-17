import React from 'react'
import { getYear } from 'date-fns'
import { useMapState } from '@/hooks'
import locales from '@/locales/components/footer'
import Logo from '@/assets/images/logo-white.png'
import { useTranslate } from '@/hooks/translate.hook'
import { FooterTranslateType } from '@/locales/types'
import { LanguageTypes } from '@/enums/language.enum'
import { LanguageStateInterface } from '@/store/interfaces/languageState.interface'
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
    const translate = useTranslate<FooterTranslateType>(locales)
    const openLink = (url: string) => window.open(url, '_blank')?.focus()
    const { currentLanguage } = useMapState(
        'language'
    ) as LanguageStateInterface

    const discordLinks = {
        [LanguageTypes.pt]: 'https://discord.gg/dAU8NhRAfc',
        [LanguageTypes.en]: 'https://discord.gg/84XQWU6PrD',
        [LanguageTypes.es]: 'https://discord.com/invite/txMyZuHydZ'
    }
    const facebookLinks = {
        [LanguageTypes.pt]:
            'https://www.facebook.com/Crypto-Share-105266032124339',
        [LanguageTypes.en]:
            'https://www.facebook.com/Crypto-Share-English-108596495119336',
        [LanguageTypes.es]:
            'https://www.facebook.com/Crypto-Share-Espanol-102254082416786'
    }
    const telegramLinks = {
        [LanguageTypes.pt]: 'https://t.me/crypto_share_portugues',
        [LanguageTypes.en]: 'https://t.me/crypto_share_english',
        [LanguageTypes.es]: 'https://t.me/crypto_share_spanish'
    }
    const instagramLinks = {
        [LanguageTypes.pt]:
            'https://instagram.com/cryptoshare_oficial_portugues?utm_medium=copy_link',
        [LanguageTypes.en]:
            'https://www.instagram.com/cryptoshare_official_english/?utm_medium=copy_link',
        [LanguageTypes.es]:
            'https://www.instagram.com/cryptoshare_oficial_espanol/?utm_medium=copy_link'
    }
    const twitterLinks = {
        [LanguageTypes.pt]: 'https://twitter.com/CryptoShare_pt',
        [LanguageTypes.en]: 'https://twitter.com/CryptoShare_En',
        [LanguageTypes.es]: 'https://twitter.com/CryptoShare_Es'
    }

    const socialItems = [
        {
            title: 'Discord',
            icon: <FaDiscord />,
            link: discordLinks[currentLanguage]
        },
        {
            title: 'Facebook',
            icon: <FaFacebookF />,
            link: facebookLinks[currentLanguage]
        },
        {
            title: 'Twitter',
            icon: <FaTwitter />,
            link: twitterLinks[currentLanguage]
        },
        {
            title: 'Instagram',
            icon: <FaInstagram />,
            link: instagramLinks[currentLanguage]
        },
        {
            title: 'Telegram',
            icon: <FaTelegramPlane />,
            link: telegramLinks[currentLanguage]
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
                    {currentYear} Cryptoshare - {translate.allRightsReserved}
                </Small>
            </Content>
        </Container>
    )
}

export default Footer
