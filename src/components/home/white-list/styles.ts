import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/components'

export const Container = styled.div`
    ${tw`py-8 mt-8 `}
    background: ${props => props.theme.colors.gradient};
`

export const Content = styled(AppContainer)`
    ${tw`py-0 flex justify-center items-center`}
`

export const Title = styled.h1`
    ${tw`flex mr-8 font-bold`}
    color: #ffffff;
    font-size: 46px;
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
