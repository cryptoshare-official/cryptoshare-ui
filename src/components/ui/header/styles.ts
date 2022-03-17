import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/components'

export const Nav = styled.nav`
    ${tw`flex flex-col justify-center fixed w-full`}

    z-index: 10;
    transition: all ease-out 0.3s;
    box-shadow: 0px 4px 16px 0px #adb4b43d;
    height: ${props => props.theme.variables.navHeight};
    background: ${props => props.theme.colors.background};

    &.transparent-nav {
        background: none !important;
        box-shadow: none;
    }
`

export const Container = styled(AppContainer)`
    ${tw`flex items-center pt-0`}
`

export const LogoContainer = styled.figure`
    ${tw`mr-4 py-1 cursor-pointer`}

    > img {
        ${tw`sm:w-3/4`}
    }
`

export const LinkGroup = styled.article`
    ${tw`md:hidden flex flex-1 justify-between px-12 lg:px-2`}
`

export const Link = styled.a`
    ${tw`text-sm cursor-pointer`}
    color: ${props => props.theme.colors.primary};
`

export const OptionsGroup = styled.article`
    ${tw`md:hidden flex ml-auto items-center py-1 px-2`}
`

export const Button = styled(AppButton)`
    letter-spacing: 1px;
    background: ${props => props.theme.colors.gradient};
    ${tw`px-8 mr-4 uppercase text-white text-sm`}
`

export const Hamburguer = styled.button`
    ${tw`space-y-2 ml-auto hidden md:block`}

    > div {
        ${tw`w-8 h-0.5 bg-gray-600`}
        background: ${props => props.theme.colors.gradient}
    }
`

export const ResponsiveContainer = styled.article`
    ${tw`
    p-6
    fixed
    w-full
    ring-1
    bg-white
    shadow-lg
    ring-black
    rounded-b-lg
    ring-opacity-5
    origin-top-right
    transition-opacity
    focus:outline-none`}
    transition: all ease-out 0.5s;
    top: ${props => props.theme.variables.navHeight};
    background: ${props => props.theme.colors.background};
`
export const ResponsiveLinkGroup = styled.article`
    ${tw`flex justify-between`}

    > a {
        ${tw`flex-1 py-3 rounded-full mx-2 text-center text-base`}
        background: #f5f5f5;
        color: ${props => props.theme.colors.secondary};
    }
`
export const ResponsiveOptionsGroup = styled.article`
    ${tw`flex ml-auto items-center justify-between mt-8 px-2`}
`
