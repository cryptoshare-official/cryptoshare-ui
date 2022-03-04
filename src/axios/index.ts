import axios from 'axios'
import enviroments from '@/config/enviroments'

const axiosClient = axios.create({
    baseURL: enviroments.API_URL,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
    }
})

export const httpClient = axiosClient
