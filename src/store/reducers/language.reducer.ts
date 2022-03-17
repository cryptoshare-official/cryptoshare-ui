import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { LOCALE_TYPES } from '@/constants/locale.contant'
import {
    CurrentLanguageType,
    LanguageStateInterface
} from '../interfaces/languageState.interface'

const initialState: LanguageStateInterface = {
    currentLanguage: '' as CurrentLanguageType
}

const { actions: mutations, reducer } = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, { payload }) {
            state.currentLanguage = payload || LOCALE_TYPES.en
        }
    }
})

const actions = {
    setLanguage: (payload: string) =>
        store.dispatch(mutations.setLanguage(payload))
}

export default reducer
export const { setLanguage } = actions
