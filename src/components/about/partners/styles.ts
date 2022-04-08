import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`py-12`}
`

export const Content = styled.article`
    ${tw`grid grid-cols-4 gap-4 sm:grid-cols-2`}
`

export const Image = styled.img`
    ${tw`rounded-md drop-shadow-md`}
    z-index: 5;
`
