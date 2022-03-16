import {
    Content,
    Title as WhitepapperTitle
} from '@/components/whitepaper/whitepaper-content/styles'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(Content)``
export const Title = styled(WhitepapperTitle)``

export const Paragraph = styled.p`
    ${tw`text-center sm:text-justify sm:text-sm sm:ml-3`}
`

export const CardGrid = styled.section`
    ${tw`grid grid-cols-2 gap-4 sm:block`}
`

export const Card = styled.article`
    ${tw`flex p-6 items-center flex-col sm:mb-4`}
    border-width: 1px;
    border-radius: 4px;
    border-color: transparent;
    transition: all 1s ease-out;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);

    @keyframes spin {
        0% {
            transform: rotateY(0deg);
        }
        25% {
            transform: rotateY(-35deg);
        }
        50% {
            transform: rotateY(0deg);
        }
        75% {
            transform: rotateY(35deg);
        }
        100% {
            transform: rotateY(0deg);
        }
    }

    &:hover {
        border-color: ${props => props.theme.colors.secondary};

        &:nth-child(-n + 2) img {
            animation: spin 5s linear infinite;
        }
    }
`
export const Box = styled.div``

export const ImageContainer = styled.div`
    ${tw`m-0`}
    perspective: 1000px;
`

export const CardImage = styled.img`
    ${tw`mb-4 relative w-44 h-44`}
    transform-style: preserve-3d;
`
export const CardTitle = styled.h4`
    ${tw`text-center`}
`
