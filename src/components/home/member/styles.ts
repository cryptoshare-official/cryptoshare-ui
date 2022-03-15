import { AppContainer, AppSeparator } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`py-10 text-base`}
`

export const Content = styled.div`
    padding-left: 8%;
    padding-right: 8%;
    ${tw`px-0`}
`

export const Title = styled.h1`
    ${tw`flex items-center text-lg font-bold mb-6`}
    color: ${props => props.theme.colors.gray};
`

export const Separator = styled(AppSeparator)`
    width: 40px;
    ${tw`mr-4`}
`

export const Row = styled.div`
    ${tw`flex pl-4 sm:flex-col sm:items-center`}

    >:first-child {
        ${tw`w-3/5 sm:w-full`}
    }

    > img {
        ${tw`ml-auto sm:ml-0 sm:my-2`}
        width: 370px;
        height: 370px;
    }
`

export const RowImages = styled.article`
    ${tw`flex justify-between my-12 sm:my-2`}

    > img {
        width: 200px;
        ${tw`sm:w-1/4`}
    }
`

export const Text = styled.p`
    white-space: pre-line;
`

export const Image = styled.img``
