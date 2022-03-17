import styled from 'styled-components'
import tw from 'twin.macro'

export const CarolselItemContainer = styled.section`
    ${tw`inline-flex items-center justify-center w-full`}
`

export const Container = styled.section`
    ${tw`overflow-hidden`}
`

export const Content = styled.article`
    ${tw`whitespace-nowrap`}
    transition: transform 0.3s;
`

export const ControlsContainer = styled.div`
    ${tw`flex items-center relative bottom-12 sm:bottom-6`}
`

export const Dot = styled.button`
    ${tw`mx-2 rounded-full w-2 h-2 sm:w-1.5 sm:h-1.5`}
    background: ${props => props.theme.colors.secondary};

    &.active {
        ${tw`w-3.5 h-3.5 sm:w-2.5 sm:h-2.5`}
    }

    &:first-child {
        margin-left: 0px;
    }
`
