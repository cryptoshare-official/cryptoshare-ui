import React from 'react'

import { Body, Text, Button, Icon } from './styles'
import AppModal from '@/components/common/modals/app-modal'
import { AppModalInterface } from '@/interfaces/modal.interface'
import {
    BsFillCheckCircleFill,
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
    const { isOpen, onBackdropClick, onClose, message, type } = props

    const iconDisct = {
        success: <AiOutlineCheck />,
        // success: <BsFillCheckCircleFill />,AiOutlineCheck
        error: <BsFillExclamationCircleFill />,
        warning: <BsFillExclamationTriangleFill />
    }

    return (
        <AppModal
            height={300}
            isOpen={isOpen}
            onBackdropClick={onBackdropClick}
        >
            <Body>
                <Icon className={type}>{iconDisct[type]}</Icon>

                <Text>{message}</Text>

                {/* <Button onClick={() => onClose}>Login</Button> */}
            </Body>
        </AppModal>
    )
}

export default AlertModal
