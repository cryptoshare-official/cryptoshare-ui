import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article``

export const Item = styled.div`
    ${tw`flex mb-4 items-center`}
`

export const Icon = styled.i`
    ${tw`rounded-full flex items-center justify-center text-lg mr-4`}

    width: 26px;
    height: 26px;
    color: #ffffff;
    background: ${props => props.theme.colors.gradient};
`
