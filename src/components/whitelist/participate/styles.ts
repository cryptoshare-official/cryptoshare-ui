import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Card, Container } from '../styles'
export { Card, Container }

export const ScoreTitleContent = styled.article`
    ${tw`flex items-center justify-between w-full`}
`

export const ScoreTitle = styled.h1`
    ${tw`text-lg font-bold mb-1`}
    color: ${props => props.theme.colors.gray};
`

export const ScoreSubtitle = styled.h1`
    ${tw`text-base font-bold sm:text-sm`}
    color: ${props => props.theme.colors.blue};
`

export const ScoreTitleBox = styled.div``

export const ScoreTitleBadge = styled.span`
    ${tw`px-5 py-3 text-sm lowercase sm:text-center`}
    color: #FFFFFF;
    background: #21235a;
    border-radius: 15px;
`
