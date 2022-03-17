import { LanguageTypes } from '@/enums/language.enum'

export type CurrentLanguageType = keyof typeof LanguageTypes
export interface LanguageStateInterface {
    currentLanguage: CurrentLanguageType
}
