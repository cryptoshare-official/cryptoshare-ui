import tw from 'twin.macro'
import NextLink from 'next/link'
import styled from 'styled-components'

const paddingDefault = tw`py-1 px-2`

export const Container = styled.nav.attrs({
    className: `flex px-8 py-4 items-center`
})`
    background: #ffffff;
    box-shadow: 0px 4px 16px 0px #adb4b43d;
`

export const LogoContainer = styled.figure.attrs({ className: `mr-4` })`
    ${paddingDefault}
`

export const LinkGroup = styled.article.attrs({
    className: `
        flex
        flex-1
        justify-between
    `
})`
    > a {
        ${paddingDefault}
        border-radius: 4px;

        &:hover {
            background-color: #dfe9f2;
            color: ${props => props.theme.colors.primary};
        }
    }
`
export const Link = styled(NextLink).attrs({
    className: `

    `
})``

export const OptionsGroup = styled.article.attrs({
    className: `flex items-center`
})`
    ${paddingDefault}
    margin-left: auto;
`
