import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer, AppButton } from '@/styles/css/components/index'

export const BackgroundContainer = styled.section`
    background: radial-gradient(circle, #c7c7c7 16%, #e3e3e3 78%);
`

export const Container = styled(AppContainer)`
    ${tw`sm:w-full px-0`}
    padding-top: 0px;
`

export const Image = styled.img`
    ${tw`relative top-5`}
`

export const Content = styled.article`
    ${tw`w-full h-full`}
`

export const Div = styled.div`
    ${tw`pl-8 sm:pl-5 sm:pt-5 top-0 w-full h-full absolute flex flex-col justify-center`}
`

export const Title = styled.h2`
    color: ${props => props.theme.colors.gray};
    ${tw`text-xl sm:text-base sm:text-sm sm:mb-2 w-1/2 font-bold whitespace-pre-wrap mb-5 `}
`

export const Button = styled(AppButton)`
    letter-spacing: 1px;
    background: ${props => props.theme.colors.gradient};
    ${tw`mr-4 w-1/4 uppercase text-white sm:px-0 sm:py-2 sm:w-2/4 sm:h-auto sm:font-bold`}

    font-size: 80%;

    @media (max-width: 640px) {
        font-size: 40%;
    }
`
