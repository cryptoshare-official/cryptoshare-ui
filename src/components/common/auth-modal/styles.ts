import { AppButton } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Body = styled.article`
    ${tw`h-full flex flex-col items-center justify-between`}
`

export const ImageLogo = styled.img`
    width: 65%;
`

export const ImageMetamask = styled.img`
    width: 20%;
`

export const Text = styled.h5`
    ${tw`text-base`}
`

export const Button = styled(AppButton)`
    ${tw`w-80 text-base uppercase`}
    color: #FFFFFF;
    border-radius: 4px;
    background: ${props => props.theme.colors.gradient};
`
