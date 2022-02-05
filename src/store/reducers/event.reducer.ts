import store from '@/store'
import { createSlice } from '@reduxjs/toolkit'
import { EventState } from '../interfaces/eventState.interface'

const initialState: EventState = {
    events: [1, 2, 3, 4, 5]
}

const { actions: mutations, reducer } = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvent(state, { payload }) {
            state.events.push(Number(payload))
        }
    }
})

const actions = {
    setEvent: (payload: number) => store.dispatch(mutations.setEvent(payload))
}

export default reducer
export const { setEvent } = actions
