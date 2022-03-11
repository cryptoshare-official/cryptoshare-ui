import styled from 'styled-components'
import { motion } from 'framer-motion'
import tw from 'twin.macro'
import { AppSeparator } from '@/styles/css/components'

export const Container = styled.aside`
    ${tw`py-6 w-1/4 sticky overflow-y-auto`}
    max-height: 84vh;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 16px rgba(173, 180, 180, 0.24);
    top: ${props => props.theme.variables.paddingTopContainer};

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.gradient};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.colors.primary};
    }
`

export const Separator = styled(AppSeparator)`
    width: 40px;
`
export const Title = styled.h3`
    ${tw`flex px-6 mb-6 items-center justify-between text-lg font-bold`}
    color: ${props => props.theme.colors.gray};
`

export const Group = styled.ul``

export const Item = styled.summary`
    ${tw`flex items-center py-2 px-6 mb-2 select-none cursor-pointer text-base font-bold`}
    color: ${props => props.theme.colors.gray};

    > :first-child {
        ${tw`mr-4`}
    }

    &:last-child {
        ${tw`mb-0`}
    }

    &.active {
        ${tw`rounded-r-full`}
        width: 90%;
        color: #ffffff;
        background: ${props => props.theme.colors.gradient};

        > i {
            background: transparent;
        }
    }
`

export const SubGroup = styled.details`
    ${tw`w-full left-0`}

    &[open] {
        > summary > :last-child {
            transform: rotate(90deg);
        }
    }
`

export const Icon = styled.i`
    ${tw`rounded-full flex items-center justify-center text-lg`}

    width: 26px;
    height: 26px;
    color: #ffffff;
    background: ${props => props.theme.colors.gradient};
`

export const SubContainer = styled(motion.article)`
    transition: all 400ms linear;
    ${tw`mb-2`}
`

export const GroupTitle = styled(Item)`
    > :last-child {
        ${tw`ml-auto`}
        transition: all 400ms linear;
    }
`

export const SubItem = styled(Item)`
    ${tw`pl-14`}
`
