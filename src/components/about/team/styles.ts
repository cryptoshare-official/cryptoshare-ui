import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`pt-12`}
`

export const Grid = styled.article`
    ${tw`grid grid-cols-3 gap-4 sm:grid-cols-2`}
`

export const View = styled.div`
    ${tw`flex items-center sm:mb-4`}
`

export const Image = styled.img`
    ${tw`mr-6`}
`

export const Box = styled.article``

export const Title = styled.h5`
    ${tw`font-bold`}
    color: ${props => props.theme.colors.gray};
`

export const Subtitle = styled.h5`
    color: ${props => props.theme.colors.grayLight};
`
