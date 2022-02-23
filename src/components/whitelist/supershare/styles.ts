import { AppButton, AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Card, Container } from '../styles'

export { Card, Container }

export const Title = styled.h1`
    ${tw`flex mr-8 font-bold sm:text-lg`}
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
`

export const Button = styled(AppButton)`
    ${tw`px-10 uppercase font-bold`}
    border-radius: 8px;
    background: #ffffff;
`

export const ButtonText = styled.h4`
    ${tw`font-bold text-base`}
    background: ${props => props.theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
`
