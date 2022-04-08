import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section``
export const Content = styled(AppContainer)`
    ${tw`pt-52 pb-12`}
`
export const Title = styled.h1`
    ${tw`font-bold text-xl`}
    color: ${props => props.theme.colors.gray};
`
