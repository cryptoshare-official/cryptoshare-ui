import tw from 'twin.macro'
import styled from 'styled-components'

export const AppContainer = styled.section`
    ${tw`container mx-auto px-8`}
    padding-top: ${props =>
        props.theme.variables.navHeight &&
        `calc(${props.theme.variables.navHeight} + 26px)`};

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`
