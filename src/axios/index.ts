import { LOCALE_TYPES } from '@/constants/locale.contant'
import axios, { AxiosRequestConfig } from 'axios'
import enviroments from '@/config/enviroments'
import store from '@/store'

const axiosClient = axios.create({
    baseURL: enviroments.API_URL,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

const getCurrentLanguage = () => {
    const { language } = store.getState()
    return LOCALE_TYPES[language.currentLanguage as 'pt' | 'en' | 'es']
}

axiosClient.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) config.headers['Accept-Language'] = getCurrentLanguage()
    return config
})

export const httpClient = axiosClient
