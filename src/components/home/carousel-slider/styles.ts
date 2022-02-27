import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer, AppButton } from '@/styles/css/components/index'

export const Container = styled(AppContainer)`
    ${tw`sm:w-full px-0`}
    padding-top: 0px;
`

export const Image = styled.img``

export const Content = styled.article`
    ${tw`w-full`}

    > div {
        top: 40%;
        width: 40%;
        ${tw`ml-12 absolute`}
    }
`
export const Title = styled.h2`
    ${tw`text-xl font-bold whitespace-pre-wrap mb-5`}
`

export const Button = styled(AppButton)`
    letter-spacing: 1px;
    background: ${props => props.theme.colors.gradient};
    ${tw`px-8 mr-4 uppercase text-white text-sm`}
`
