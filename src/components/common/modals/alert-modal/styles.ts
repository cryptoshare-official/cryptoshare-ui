import { AppButton } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Body = styled.article`
    ${tw`h-full flex flex-col items-center justify-center`}
`
export const Text = styled.h5`
    ${tw`text-base`}
`

export const Icon = styled.i`
    ${tw`mb-6`}
    font-size: 112px;
    color: ${props => props.theme.colors.success};

    &.success {
        ${tw`w-28 h-28 flex items-center justify-center rounded-full`}
        background: ${props => props.theme.colors.gradient};
        font-size: 80px;
        color: #fff;
    }

    &.error {
        color: ${props => props.theme.colors.danger};
    }

    &.warning {
        color: ${props => props.theme.colors.warning};
    }
`

export const Button = styled(AppButton)`
    ${tw`w-80 text-base uppercase`}
    color: #FFFFFF;
    border-radius: 4px;
    background: ${props => props.theme.colors.gradient};
`
