import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'

export const Card = styled.article`
    ${tw`p-6 text-base`}
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 16px rgba(173, 180, 180, 0.24);
`

export const Container = styled(AppContainer)`
    ${tw`pt-0 mb-10`}
`
