import { combineReducers } from '@reduxjs/toolkit'

import ui from './ui.reducer'
import event from './event.reducer'
import wallet from './wallet.reducer'
import language from './language.reducer'

export const reducers = { ui, event, wallet, language }
export default combineReducers(reducers)
