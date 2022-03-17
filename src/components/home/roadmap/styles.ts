import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`py-6`}
`

export const Subtitle = styled.p`
    ${tw`text-base font-semibold mt-4 w-2/3 md:w-full text-justify`}
    color: ${props => props.theme.colors.blue};
`

export const RoadmapSeparator = styled.span`
    ${tw`text-sm flex items-center uppercase`}
    color: #d8d8d8;
    letter-spacing: 2px;

    &:after {
        ${tw`inline-block ml-6 w-1/3 md:w-full`}
        content: '';
        border: 1px solid #f2f2f2;
    }
`
