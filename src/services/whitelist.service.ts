import { httpClient } from '@/axios'

export class WhitelistService {
    sendEmail(email: string) {
        console.log(':::::::', email)
        return httpClient.post('/whitelist-subscribers', { email })
    }
}
