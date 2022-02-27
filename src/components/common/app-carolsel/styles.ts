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
    ${tw`flex items-center`}
`

export const Dot = styled.button`
    ${tw`mx-2 rounded-full`}
    width: 8px;
    height: 8px;
    background: ${props => props.theme.colors.secondary};

    &.active {
        width: 15px;
        height: 15px;
    }
`
