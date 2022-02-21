import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`py-6`}
`

export const Subtitle = styled.p`
    ${tw`text-base mt-4 w-2/3 md:w-full`}
    color: ${props => props.theme.colors.blue};
`

export const Article = styled.article`
    ${tw`my-6 ml-1 w-2/3 md:w-full`}
    border-left: 2px solid #F2F2F2;
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

export const Item = styled.div`
    ${tw`flex items-center text-sm relative`}
    height: 48px;
    right: 9px;

    &:before {
        ${tw`mr-4`}
        content: '';
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #d8d8d8;
        border: 2px solid #ffffff;
        box-shadow: 0px 0px 4px #ffffff;
    }

    &.completed {
        &:before {
            background: ${props => props.theme.colors.gradient};
        }
    }
`

export const ItemDate = styled.h5`
    ${tw`w-1/4 uppercase font-semibold`}
    color: ${props => props.theme.colors.gray};
`

export const ItemLabel = styled.h5`
    ${tw`font-bold`}
`
