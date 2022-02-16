import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { UiStateInterface } from '../interfaces/uiState.interface'

const initialState: UiStateInterface = {
    delegateHome: ''
}

const { actions: mutations, reducer } = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setDelegateHome(state, { payload }) {
            state.delegateHome = payload
        }
    }
})

const actions = {
    setDelegateHome: (payload: string) =>
        store.dispatch(mutations.setDelegateHome(payload))
}

export default reducer
export const { setDelegateHome } = actions
