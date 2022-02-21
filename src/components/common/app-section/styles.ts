import styled from 'styled-components'
import { AppSeparator } from '@/styles/css/components'
import tw from 'twin.macro'

export const Container = styled.article``

export const Separator = styled(AppSeparator)`
    ${tw`mr-4`}
    width: 40px;
`
export const Title = styled.h3`
    ${tw`flex items-center text-lg font-bold`}
    color: ${props => props.theme.colors.gray};
`

export const SubTitle = styled.h4`
    ${tw`text-base font-bold pl-14 sm:text-sm`}
    color: ${props => props.theme.colors.blue};
`

export const Content = styled.div`
    ${tw`pl-14 md:pl-0 mt-4`}
`
