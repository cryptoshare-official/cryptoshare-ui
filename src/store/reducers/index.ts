import { combineReducers } from '@reduxjs/toolkit'
import event from './event.reducer'
import wallet from './wallet.reducer'

export const reducers = { event, wallet }
export default combineReducers(reducers)
