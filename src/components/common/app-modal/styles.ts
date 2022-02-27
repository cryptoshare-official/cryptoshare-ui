import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Backdrop = styled.section`
    ${tw`fixed w-full h-full top-0 flex justify-center z-30`}
    background: #00000066;
    padding-top: ${props => props.theme.variables.paddingTopContainer};
`

export const ModalContainer = styled(motion.article)`
    ${tw`p-6 flex flex-col z-50`}
    height: 40vh;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 16px rgba(173, 180, 180, 0.24);
`

export const ModalHeader = styled.div`
    ${tw`py-2`}
`

export const ModalBody = styled.div`
    ${tw`flex-auto overflow-y-auto`}
`

export const ModalFooter = styled.div`
    ${tw`py-2`}
`
