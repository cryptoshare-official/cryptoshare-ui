import styled from 'styled-components'
import tw from 'twin.macro'
import { Card as WhitelistCard } from '../styles'

export const Container = styled.article``

export const Card = styled(WhitelistCard)`
    ${tw`px-4 py-6 my-2 text-base grid sm:text-sm sm:px-2 sm:py-4`}
    grid-template-columns: auto 1fr 30% 15%;
`

export const Icon = styled.div`
    width: 35px;
    height: 35px;
    ${tw`rounded-full flex items-center justify-center mr-3`}
    background: ${props => props.theme.colors.gradient};

    > svg {
        color: #ffffff;
    }
`

export const Title = styled.div`
    ${tw`font-bold flex items-center`}
`

export const Value = styled.div`
    ${tw`flex items-center lowercase font-medium`}
    color: ${props => props.theme.colors.gray};

    > i {
        width: 15px;
        height: 15px;
        background: ${props => props.theme.colors.success};
        ${tw`rounded-full flex items-center justify-center mr-2`}

        svg {
            width: 7px;
            color: #ffffff;
        }
    }
`

export const Action = styled.div`
    ${tw`font-bold flex items-center`}
`

export const Button = styled.button`
    ${tw`font-bold text-base block font-medium`}
    background: ${props => props.theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    &:after {
        ${tw`block`}
        content: '';
        height: 1px;
        width: auto;
        background: ${props => props.theme.colors.gradient};
    }
`
