import { AppButton, AppFormGroup } from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Card, Container } from '../styles'
export { Card, Container }

export const Form = styled.form`
    ${tw`flex justify-between items-end sm:flex-col`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`my-0 sm:w-full sm:mb-4`}
    width: calc(60% - 45px);
`

export const Label = styled.label`
    ${tw`font-semibold`}
`

export const Input = styled.input``

export const Button = styled(AppButton)`
    ${tw`uppercase font-semibold sm:w-full`}
    width: 40%;
    color: #ffffff;
    border-radius: 4px;
    background: ${props => props.theme.colors.gradient};
`

export const Span = styled.span``
