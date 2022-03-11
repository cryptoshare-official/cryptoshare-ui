export class MetamaskService {
    connect() {
        try {
            const _window = window as any
            return _window.ethereum.request({ method: 'eth_requestAccounts' })
        } catch (error) {
            throw new Error('Ocorreu um erro ao conectar carteira')
        }
    }
}
