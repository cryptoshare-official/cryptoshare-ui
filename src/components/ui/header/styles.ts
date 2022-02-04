import styled from 'styled-components'
import tw from 'twin.macro'

const paddingDefault = tw`py-1 px-2`

export const Container = styled.nav.attrs({
    className: ` flex px-8 py-4 items-center`
})`
    background: #f4faff;
`

export const LogoContainer = styled.figure.attrs({ className: `mr-4` })`
    ${paddingDefault}
`

export const LinkGroup = styled.article.attrs({ className: `flex` })`
    > a {
        ${paddingDefault}
        border-radius: 4px;

        &:hover {
            background-color: #dfe9f2;
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const OptionsGroup = styled.article.attrs({
    className: `flex items-center`
})`
    ${paddingDefault}
    margin-left: auto;

    > div,
    > article {
        border-radius: 50%;
        background-color: gray;
    }

    > div {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }

    > article {
        width: 35px;
        height: 35px;
    }
`
