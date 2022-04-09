import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`overflow-hidden`}
`

export const Content = styled.div`
    * {
        z-index: 2;
    }
`

export const Bubbles = styled.ul`
    ${tw`w-full h-full top-0 left-0 relative`}
`

export const Bubble = styled.li`
    ${tw`rounded-full absolute list-none flex w-5 h-5`}

    z-index: -1;
    bottom: -800px;
    background: rgba(0, 0, 0, 0.08);
    animation: animate 25s linear infinite;

    @keyframes animate {
        0% {
            transform: translateY(0);
            opacity: 1;
        }

        100% {
            transform: translateY(-1000px);
            opacity: 0;
        }
    }
`
