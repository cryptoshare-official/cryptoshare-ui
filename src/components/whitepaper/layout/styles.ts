import { AppContainer } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    min-height: 100%;
    ${tw`flex pb-8 sm:flex-col`}
`

export const Main = styled.main`
    ${tw`ml-8 py-6 px-8 sm:ml-0`}
    flex: 1;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 16px rgba(173, 180, 180, 0.24);
`
