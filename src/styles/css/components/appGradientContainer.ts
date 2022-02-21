import styled from 'styled-components'
import tw from 'twin.macro'

export const AppGradientContainer = styled.section`
    ${tw`py-8`}
    background: ${props => props.theme.colors.gradient};
`
