import { combineReducers } from '@reduxjs/toolkit'

import event from './event.reducer'
import wallet from './wallet.reducer'
import language from './language.reducer'

export const reducers = { event, wallet, language }
export default combineReducers(reducers)
