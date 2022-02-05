import { combineReducers } from '@reduxjs/toolkit'
import event from './event.reducer'

export const reducers = { event }
export default combineReducers(reducers)
