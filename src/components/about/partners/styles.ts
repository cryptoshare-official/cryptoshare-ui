import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`py-12`}
`

export const Content = styled.article`
    ${tw`grid grid-cols-4 gap-4 sm:grid-cols-2`}
`

export const CardImage = styled.div`
    ${tw`sm:h-24 h-36 flex w-full bg-white shadow-lg rounded-md items-center justify-center cursor-pointer`}
    transition: transform 850ms;

    &:hover {
        transform: scale(0.9);
    }

    &.contain {
        ${tw`p-4`}

        > img {
            ${tw`object-contain`}
        }
    }

    &.cover {
        > img {
            width: inherit;
            ${tw`object-cover`}
        }
    }
`

export const Image = styled.img`
    ${tw`rounded-md h-full`}
`
