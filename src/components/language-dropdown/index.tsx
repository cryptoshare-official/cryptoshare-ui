import { useMapState } from '@/hooks'
import React, { useState } from 'react'
import { fadeScale } from '@/styles/animation'
import { LanguageTypes } from '@/enums/language.enum'
import { setLanguage } from '@/store/reducers/language.reducer'
import { Container, Button, OptionContainer, Option } from './styles'
import {
    CurrentLanguageType,
    LanguageStateInterface
} from '@/store/interfaces/languageState.interface'

import PTLogo from '@/assets/images/languages/pt.png'
import ENLogo from '@/assets/images/languages/en.png'
import ESLogo from '@/assets/images/languages/es.png'

import { LanguageDropdownInterface } from './@types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const LanguageDropdown: React.FC<LanguageDropdownInterface> = props => {
    const [isOpen, setIsOpen] = useState(false)
    const { currentLanguage } = useMapState(
        'language'
    ) as LanguageStateInterface

    const languages = Object.keys(LanguageTypes).map((id: string) => ({ id }))

    const imageDisct = {
        [LanguageTypes.pt]: PTLogo,
        [LanguageTypes.en]: ENLogo,
        [LanguageTypes.es]: ESLogo
    }

    const toggle = () => setIsOpen(!isOpen)
    const onChangeLanguage = (language: string) => {
        setLanguage(language)
        toggle()

        if (props.onChange) props.onChange()
    }

    return (
        <Container>
            <Button onClick={() => toggle()}>
                <img
                    width="38px"
                    height="38px"
                    alt={currentLanguage}
                    src={imageDisct[currentLanguage]}
                />
                <FontAwesomeIcon icon={faChevronDown} size="lg" />
            </Button>

            {isOpen && (
                <OptionContainer
                    animate={fadeScale.animate}
                    initial={fadeScale.initial}
                    variants={fadeScale.variants}
                >
                    {languages.map((item, index) => (
                        <Option
                            key={index}
                            onClick={() => onChangeLanguage(item.id)}
                        >
                            <img
                                width="38px"
                                height="38px"
                                alt={currentLanguage}
                                src={imageDisct[item.id as CurrentLanguageType]}
                            />
                        </Option>
                    ))}
                </OptionContainer>
            )}
        </Container>
    )
}

export default LanguageDropdown
