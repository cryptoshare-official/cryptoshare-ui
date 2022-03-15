import {
    Content,
    Title as WhitepapperTitle
} from '@/components/whitepaper/whitepaper-content/styles'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(Content)``
export const Title = styled(WhitepapperTitle)``

export const Paragraph = styled.p`
    ${tw`text-center`}
`

export const CardGrid = styled.section`
    ${tw`grid grid-cols-2 gap-4`}
`

export const Card = styled.article`
    ${tw`flex p-6 items-center flex-col`}
    border-radius: 4px;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);
`

export const CardImage = styled.img`
    width: 180px;
    ${tw`mb-4`}
`
export const CardTitle = styled.h4``
