import { useMapState } from '@/hooks'
import React, { useState } from 'react'
import { LanguageTypes } from '@/enums/language.enum'
import { setLanguage } from '@/store/reducers/language.reducer'
import { LanguageStateInterface } from '@/store/interfaces/languageState.interface'

import { Container, Button, OptionContainer, Option } from './styles'
import PTLogo from '../../assets/images/languages/pt.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const LanguageDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { currentLanguage } = useMapState(
        'language'
    ) as LanguageStateInterface
    const languages = Object.keys(LanguageTypes).map((id: string) => ({
        id
    }))

    const toggle = () => setIsOpen(!isOpen)
    const onChangeLanguage = (language: string) => {
        setLanguage(language)
        toggle()
    }

    const currentLanguageImage = () => {
        const imageDisct = {
            pt: <PTLogo />,
            en: <PTLogo />,
            es: <PTLogo />
        }

        return imageDisct[currentLanguage]
    }

    return (
        <Container>
            <Button onClick={() => toggle()}>
                {currentLanguageImage()}
                <FontAwesomeIcon icon={faChevronDown} size="lg" />
            </Button>

            {isOpen && (
                <OptionContainer>
                    {languages.map((item, index) => (
                        <Option
                            key={index}
                            onClick={() => onChangeLanguage(item.id)}
                        >
                            {item.id}
                        </Option>
                    ))}
                </OptionContainer>
            )}
        </Container>
    )
}

export default LanguageDropdown
