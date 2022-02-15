import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/components'

export const Nav = styled.nav`
    ${tw`flex items-center fixed w-full`}

    z-index: 10;
    transition: all ease-out 0.5s;
    box-shadow: 0px 4px 16px 0px #adb4b43d;
    height: ${props => props.theme.variables.navHeight};
    background: ${props => props.theme.colors.background};

    &.transparent-nav {
        background: none !important;
        box-shadow: none;
    }
`

export const Container = styled(AppContainer)`
    ${tw`flex items-center w-full pt-0`}
`

export const LogoContainer = styled.figure`
    ${tw`mr-4 py-1`}
`

export const LinkGroup = styled.article`
    ${tw`flex flex-1 justify-between px-12`}
`

export const Link = styled.a`
    ${tw`text-sm`}
    color: ${props => props.theme.colors.primary}
`

export const OptionsGroup = styled.article`
    margin-left: auto;
    ${tw`flex items-center py-1 px-2`}
`

export const Button = styled(AppButton)`
    letter-spacing: 1px;
    background: ${props => props.theme.colors.gradient};
    ${tw`px-8 mr-4 uppercase text-white text-sm`}
`
