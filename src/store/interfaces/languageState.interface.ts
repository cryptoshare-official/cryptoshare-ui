import { LanguageTypes } from '@/enums/language.enum'

export interface LanguageStateInterface {
    currentLanguage: keyof typeof LanguageTypes | ''
}
