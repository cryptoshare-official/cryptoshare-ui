import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import reducers from '@/store/reducers'
import thunk from 'redux-thunk'

const persistConfig = { key: 'root', storage }
const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export default store
