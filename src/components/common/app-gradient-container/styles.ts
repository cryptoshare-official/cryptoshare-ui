import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Container = styled.div`
    ${tw`py-8 mt-8`}
    background: ${props => props.theme.colors.gradient};
`

export const Content = styled(AppContainer)`
    ${tw`py-0`}
`
