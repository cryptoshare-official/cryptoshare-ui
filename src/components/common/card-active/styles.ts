import tw from 'twin.macro'
import styled from 'styled-components'
import { AppSeparator } from '@/styles/css/components'

export const Container = styled.article`
    ${tw`p-10`}

    border-radius: 4px;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);
`

export const Icon = styled.img``

export const Title = styled.h3`
    ${tw`text-lg font-bold mt-4`}
`

export const Separator = styled(AppSeparator)`
    ${tw`my-4`}
    width: 56px;
`

export const Text = styled.p`
    ${tw`text-base`}
`
