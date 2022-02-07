import { useMapState } from '@/hooks'
import { LanguageStateInterface } from '@/store/interfaces/languageState.interface'

export const useTranslate = <Data>(locale: any) => {
    const { currentLanguage } = useMapState(
        'language'
    ) as LanguageStateInterface

    return locale[currentLanguage] as Data
}
