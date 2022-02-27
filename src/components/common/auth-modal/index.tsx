import React from 'react'
import Logo from '@/assets/images/logo.png'
import AppModal from '@/components/common/app-modal'
import MetamaskLogo from '@/assets/images/metamask.png'
import { setWallet } from '@/store/reducers/wallet.reducer'
import { MetamaskService } from '@/services/metamask.service'
import { AppModalInterface } from '@/interfaces/modal.interface'
import { Body, ImageLogo, ImageMetamask, Text, Button } from './styles'

interface AuthModalProps extends AppModalInterface {
    isOpen: boolean
}

const AuthModal: React.FC<AuthModalProps> = props => {
    const { isOpen, onBackdropClick, onClose } = props
    const metamaskService = new MetamaskService()

    const handleLogin = async () => {
        const [wallet] = await metamaskService.connect()

        console.log(wallet)
        setWallet(wallet)
        if (onClose) onClose()
    }

    return (
        <AppModal
            height={300}
            isOpen={isOpen}
            onBackdropClick={onBackdropClick}
        >
            <Body>
                <ImageLogo src={Logo} alt="Crypto Share" />

                <ImageMetamask src={MetamaskLogo} alt="Metamask" />
                <Text>Login Metamask</Text>

                <Button onClick={() => handleLogin()}>Login</Button>
            </Body>
        </AppModal>
    )
}

export default AuthModal
