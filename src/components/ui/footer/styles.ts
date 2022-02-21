import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`py-8`}
    color: #ffffff;
    background: ${props => props.theme.colors.gray_1};
    min-height: ${props => props.theme.variables.footerHeight};
`

export const Content = styled(AppContainer)`
    ${tw`flex flex-col justify-end items-center py-0`}
`
export const Article = styled.article`
    ${tw`w-full flex justify-between items-center pb-8 mb-4 sm:flex-col`}
    border-bottom: 1px solid #FFFFFF;
`

export const Separator = styled.hr``

export const Small = styled.small`
    ${tw`text-sm`}
`

export const IconGroup = styled.div`
    ${tw`flex sm:mt-4`}

    > i {
        width: 35px;
        height: 35px;
        ${tw`mx-2 cursor-pointer rounded-full flex items-center justify-center`}
        background: ${props => props.theme.colors.gradient};

        > svg {
            color: #ffffff;
        }
    }
`
