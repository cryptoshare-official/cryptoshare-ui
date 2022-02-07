import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { LanguageStateInterface } from '../interfaces/languageState.interface'

const initialState: LanguageStateInterface = {
    currentLanguage: 'pt'
}

const { actions: mutations, reducer } = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage(state, { payload }) {
            state.currentLanguage = payload
        }
    }
})

const actions = {
    setLanguage: (payload: string) =>
        store.dispatch(mutations.setLanguage(payload))
}

export default reducer
export const { setLanguage } = actions
