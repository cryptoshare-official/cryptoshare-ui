import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer, AppSeparator } from '@/styles/css/components'

export const Container = styled.section`
    ${tw`py-8`}
    background: ${props => props.theme.colors.blue};
`

export const Content = styled(AppContainer)`
    ${tw`py-0`}
`

export const Title = styled.h1`
    ${tw`flex items-center text-lg font-bold`}
    color: #ffffff;

    > hr {
        ${tw`mr-4`}
        background: #ffffff;
    }
`

export const Separator = styled(AppSeparator)`
    width: 40px;
`

export const Grid = styled.article`
    ${tw`my-6 grid grid-cols-3 gap-4`}
`

export const Card = styled.div`
    ${tw`py-6 px-8`}
    border-radius: 4px;
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);
`

export const CardHeader = styled.div`
    ${tw`mb-4 flex justify-between items-center`}
`

export const CardTitle = styled.h4`
    ${tw`text-lg font-bold`}
    color: ${props => props.theme.colors.gray};
`

export const CardDescription = styled.p`
    ${tw`mt-6 text-base`}
`
