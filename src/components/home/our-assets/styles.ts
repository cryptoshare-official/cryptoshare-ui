import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer, AppSeparator } from '@/styles/css/components'

export const Container = styled(AppContainer)`
    ${tw`pt-10 pb-6`}
`

export const Title = styled.h1`
    ${tw`flex items-center text-lg font-bold`}
    color: ${props => props.theme.colors.gray};
`

export const Separator = styled(AppSeparator)`
    width: 40px;
    ${tw`mr-4`}
`

export const AssetsGrid = styled.div`
    ${tw`mt-8 grid grid-cols-2 gap-4 px-12 md:px-0 sm:flex sm:flex-col sm:px-0`}
    padding-left: 8rem;
    padding-right: 8rem;

    > article {
        min-height: 270px;
    }
`
