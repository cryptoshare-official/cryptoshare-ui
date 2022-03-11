import styled from 'styled-components'
import tw from 'twin.macro'

// #region Shared
export const Container = styled.section``
export const Title = styled.h2`
    ${tw`font-bold text-lg block mb-8`}
    color: ${props => props.theme.colors.secondary};

    &:after {
        ${tw`block mt-2`}
        content: '';
        height: 1px;
        width: auto;
        background: ${props => props.theme.colors.gradient};
    }
`

export const Content = styled.section`
    h4 {
        ${tw`font-bold mb-2`}
        font-size: 16px;
        color: ${props => props.theme.colors.primary};
    }

    p,
    div {
        ${tw`text-base`}
        color: ${props => props.theme.colors.gray_1};
    }

    p {
        ${tw`mb-6`}
    }

    table {
        ${tw`border-collapse border w-full text-base`}

        td, th {
            ${tw`border p-2`}

            &:first-of-type {
                ${tw`pl-6`}
            }

            &:last-of-type {
                ${tw`pr-6`}
            }
        }

        th {
            ${tw`text-left`}
        }
    }
`

export const Paragraph = styled.p``
// #endregion Shared

export const CardContainer = styled.section`
    ${tw`flex flex-wrap justify-between`}
`

export const Card = styled.article`
    ${tw`flex flex-col p-6 mb-6 sm:w-full`}
    border-radius: 4px;
    width: calc(50% - 12px);
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);

    &:first-of-type {
        ${tw`w-full`}
    }
`

export const CardTitle = styled.h4``
export const CardBody = styled.div``

export const ImageContainer = styled.figure`
    ${tw`w-full flex justify-center mt-8`}
`
export const Image = styled.img``
