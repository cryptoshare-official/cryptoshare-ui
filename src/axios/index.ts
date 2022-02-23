import axios from 'axios'
import enviroments from '@/config/enviroments'

const axiosClient = axios.create({
    baseURL: enviroments.API_URL,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

axiosClient.interceptors.request.use(config => {
    // config.headers.Authorization = `Bearer ${store.getters['auth/getCercToken']}`

    return config
})

axiosClient.interceptors.response.use(response => response.data)

export const httpClient = axiosClient
