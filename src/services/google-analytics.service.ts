export class GoogleAnalyticsService {
    emit(action: string, value?: string) {
        window.gtag('event', action, { value })
    }
}
