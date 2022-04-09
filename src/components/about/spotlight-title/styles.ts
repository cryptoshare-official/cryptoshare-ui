import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/components'
import BackgroundLines from '@/assets/images/background-lines.png'

export const Container = styled.section`
    background-image: ${`url('${BackgroundLines}')`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Content = styled(AppContainer)`
    ${tw`pt-52 pb-12 sm:pt-36`}
`
export const Title = styled.h1`
    ${tw`font-bold text-xl`}
    color: ${props => props.theme.colors.gray};
`
