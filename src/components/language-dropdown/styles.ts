import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton } from '@/styles/css/components'

export const Container = styled.section`
    ${tw`relative inline-block`}
`

export const Button = styled(AppButton)`
    ${tw`
        pl-2
        pr-3
        shadow-sm
        inline-flex
        items-center
        justify-between
        hover:bg-gray-50
    `}

    width: 90px;
    background: #f5f5f5;
`

export const OptionContainer = styled.article`
    ${tw`
        mt-2
        py-1
        w-56
        ring-1
        right-0
        absolute
        bg-white
        shadow-lg
        rounded-md
        ring-black
        ring-opacity-5
        origin-top-right
        focus:outline-none
    `}
`

export const Option = styled.button`
    ${tw`p-3 uppercase w-full text-left`}
`
