import home from '@/locales/pages/home/pt'
import header from '@/locales/components/header/pt'
import whitelist from '@/locales/pages/whitelist/pt'
import whitepaperSideMenu from '@/locales/components/whitepaper/sidemenu/pt'
import whitepaperMembers from '@/locales/pages/whitepaper/economy/members/pt'
import whitepaperIntroduction from '@/locales/pages/whitepaper/introduction/pt'
import whitepaperICOProgram from '@/locales/pages/whitepaper/economy/ico-program/pt'
import whitepaperCryptocurrencies from '@/locales/pages/whitepaper/economy/cryptocurrencies/pt'

export type HomeTranslateType = typeof home
export type HeaderTranslateType = typeof header
export type WhitelistTranslateType = typeof whitelist

// #region Whitepaper
export type WhitepaperTranslateType = { title: string; content: string }
export type WhitepaperMembersTranslateType = typeof whitepaperMembers
export type WhitepaperSideMenuTranslateType = typeof whitepaperSideMenu
export type WhitepaperICOProgramTranslateType = typeof whitepaperICOProgram
export type WhitepaperIntroductionTranslateType = typeof whitepaperIntroduction
export type WhitepaperCryptocurrenciesTranslateType =
    typeof whitepaperCryptocurrencies
// #endregion Whitepaper
