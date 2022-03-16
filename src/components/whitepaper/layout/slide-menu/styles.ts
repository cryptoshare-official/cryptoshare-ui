import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`hidden md:block pt-0 px-0 mb-4`}
`

export const Badge = styled.span`
    ${tw`px-3 py-1 text-sm relative top-2.5 left-2.5`}
    color: #fff;
    border-radius: 4px;
    background: ${props => props.theme.colors.gradient};
`

export const Group = styled.article`
    ${tw`flex overflow-x-auto py-4 px-2`}
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);
`

export const Item = styled.div`
    ${tw`mx-4 text-sm flex flex-col justify-center items-center`}

    &:first-of-type {
        ${tw`ml-0`}
    }

    &:last-of-type {
        ${tw`mr-0`}
    }
`

export const Icon = styled.i`
    ${tw`rounded-full flex items-center justify-center text-lg`}

    width: 32px;
    height: 32px;
    color: #ffffff;
    background: ${props => props.theme.colors.gradient};
`

export const Label = styled.span`
    ${tw`whitespace-nowrap`}
`
