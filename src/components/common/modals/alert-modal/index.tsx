import React from 'react'

import { Body, Text, Icon } from './styles'
import AppModal from '@/components/common/modals/app-modal'
import { AppModalInterface } from '@/interfaces/modal.interface'
import {
    BsFillExclamationCircleFill,
    BsFillExclamationTriangleFill
} from 'react-icons/bs'

import { AiOutlineCheck } from 'react-icons/ai'

interface AlertModalProps extends AppModalInterface {
    isOpen: boolean
    message: string
    type: 'success' | 'error' | 'warning'
}

const AlertModal: React.FC<AlertModalProps> = props => {
    const { isOpen, onBackdropClick, message, type } = props

    const iconDisct = {
        success: <AiOutlineCheck />,
        error: <BsFillExclamationCircleFill />,
        warning: <BsFillExclamationTriangleFill />
    }

    return (
        <AppModal
            height={280}
            width={'96vw'}
            maxWidth={490}
            isOpen={isOpen}
            onBackdropClick={onBackdropClick}
        >
            <Body>
                <Icon className={type}>{iconDisct[type]}</Icon>
                <Text>{message}</Text>
            </Body>
        </AppModal>
    )
}

export default AlertModal
