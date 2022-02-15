export class MetamaskService {
    connect() {
        const _window = window as any
        return _window.ethereum.request({ method: 'eth_requestAccounts' })
    }
}
