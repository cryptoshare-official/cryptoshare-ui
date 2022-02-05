import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { WalletStateInterface } from '../interfaces/walletState.interface'

const initialState: WalletStateInterface = {
    wallet: ''
}

const { actions: mutations, reducer } = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setWallet(state, { payload }) {
            state.wallet = payload
        }
    }
})

const actions = {
    setWallet: (payload: string) => store.dispatch(mutations.setWallet(payload))
}

export default reducer
export const { setWallet } = actions
