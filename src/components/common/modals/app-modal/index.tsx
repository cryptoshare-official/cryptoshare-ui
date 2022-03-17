import { fadeScale } from '@/styles/animation'
import React, { useEffect, useRef } from 'react'
import { AppModalInterface } from '@/interfaces/modal.interface'
import {
    Backdrop,
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalContainer
} from './styles'

const AppModal: React.FC<AppModalInterface> = props => {
    const backdropEl = useRef(null)
    const {
        isOpen,
        width,
        maxWidth,
        height,
        children,
        onBackdropClick,
        header,
        footer
    } = props

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const handleBackdropClick = (element: EventTarget) => {
        const isBackdrop = element === backdropEl.current
        if (!isBackdrop || !onBackdropClick) return

        onBackdropClick()
    }

    return (
        <>
            {isOpen && (
                <Backdrop
                    ref={backdropEl}
                    onClick={({ target }) => handleBackdropClick(target)}
                >
                    <ModalContainer
                        animate={fadeScale.animate}
                        initial={fadeScale.initial}
                        variants={fadeScale.variants}
                        style={{ width: width || 490, maxWidth, height }}
                    >
                        {header && <ModalHeader>{header}</ModalHeader>}
                        <ModalBody>{children}</ModalBody>
                        {footer && <ModalFooter>{footer}</ModalFooter>}
                    </ModalContainer>
                </Backdrop>
            )}
        </>
    )
}

export default AppModal
