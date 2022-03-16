import { AppContainer, AppSeparator } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`py-10 text-base`}
`

export const Content = styled.div`
    ${tw`px-0`}
    padding-left: 8%;
    padding-right: 8%;

    @keyframes spin {
        0% {
            transform: rotateY(0deg);
        }
        25% {
            transform: rotateY(-20deg);
        }
        50% {
            transform: rotateY(0deg);
        }
        75% {
            transform: rotateY(20deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }
`

export const Title = styled.h1`
    ${tw`flex items-center text-lg font-bold mb-6`}
    color: ${props => props.theme.colors.gray};
`

export const Separator = styled(AppSeparator)`
    width: 40px;
    ${tw`mr-4`}
`

export const Row = styled.div`
    ${tw`flex pl-4 sm:flex-col sm:items-center`}

    >:first-child {
        ${tw`w-3/5 sm:w-full`}
    }

    > img {
        ${tw`ml-auto self-center sm:ml-0 sm:my-2 w-80 h-80 sm:h-72`}
    }
`

export const RowImages = styled.article`
    ${tw`flex justify-between my-12 sm:my-2 flex-wrap`}

    > img {
        ${tw`w-3/12 sm:w-6/12`}
    }
`

export const Text = styled.p`
    ${tw`text-justify`}
    white-space: pre-line;
`

export const Image = styled.img`
    ${tw`cursor-default`}
    transform-style: preserve-3d;

    &:hover {
        animation: spin 5s linear infinite;
    }
`
