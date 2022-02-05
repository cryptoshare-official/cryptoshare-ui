import { ReducersType, RootState } from '@/store/types'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

type UseSelectorAppType = TypedUseSelectorHook<RootState>

export const useMapState = (key?: ReducersType) => {
    const useAppSelector: UseSelectorAppType = useSelector
    return useAppSelector(state => (key ? state[key] : state))
}
