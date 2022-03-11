import {
    Content,
    Title as WhitepapperTitle
} from '@/components/whitepaper/whitepaper-content/styles'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(Content)``

export const Title = styled(WhitepapperTitle)``

export const Paragraph = styled.p``

export const Card = styled.article`
    ${tw`flex p-6 mb-6 items-center sm:flex-col`}
    border-radius: 4px;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);
`

export const Image = styled.img`
    width: 200px;
    ${tw`mr-5`}
`

export const CardContent = styled.div``
