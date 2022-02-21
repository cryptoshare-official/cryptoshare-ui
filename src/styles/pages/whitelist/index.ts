import {
    AppButton,
    AppContainer,
    AppFormGroup,
    AppGradientContainer
} from '@/styles/css/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)``

export const GradientContainer = styled(AppGradientContainer)``

export const Card = styled.article`
    ${tw`p-6 text-base`}
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 4px 16px rgba(173, 180, 180, 0.24);
`

export const ScoreTitleContent = styled.article`
    ${tw`flex items-center justify-between w-full`}
`

export const ScoreTitle = styled.h1`
    ${tw`text-lg font-bold mb-1`}
    color: ${props => props.theme.colors.gray};
`

export const ScoreSubtitle = styled.h1`
    ${tw`text-base font-bold sm:text-sm`}
    color: ${props => props.theme.colors.blue};
`

export const ScoreTitleBox = styled.div``

export const ScoreTitleBadge = styled.span`
    ${tw`px-5 py-3 text-sm lowercase sm:text-center`}
    color: #FFFFFF;
    background: #21235a;
    border-radius: 15px;
`

export const ScoreCard = styled(Card)`
    ${tw`px-4 py-6 my-2 text-base grid sm:text-sm sm:px-2 sm:py-4`}
    grid-template-columns: auto 1fr 30% 15%;
`

export const ScoreCardIcon = styled.div`
    width: 35px;
    height: 35px;
    ${tw`rounded-full flex items-center justify-center mr-3`}
    background: ${props => props.theme.colors.gradient};

    > svg {
        color: #ffffff;
    }
`

export const ScoreCardTitle = styled.div`
    ${tw`font-bold flex items-center`}
`

export const ScoreCardValue = styled.div`
    ${tw`flex items-center lowercase font-medium`}
    color: ${props => props.theme.colors.gray};

    > i {
        width: 15px;
        height: 15px;
        background: ${props => props.theme.colors.success};
        ${tw`rounded-full flex items-center justify-center mr-2`}

        svg {
            width: 7px;
            color: #ffffff;
        }
    }
`

export const ScoreCardAction = styled.div`
    ${tw`font-bold flex items-center`}
`

export const ScoreCardButton = styled.button`
    ${tw`font-bold text-base block font-medium`}
    background: ${props => props.theme.colors.gradient};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    &:after {
        ${tw`block`}
        content: '';
        height: 1px;
        width: auto;
        background: ${props => props.theme.colors.gradient};
    }
`

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
