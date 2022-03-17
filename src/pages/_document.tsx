import React from 'react'
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import enviroments from '@/config/enviroments'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />

                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap"
                        rel="stylesheet"
                    />

                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${enviroments.GA_KEY}`}
                    ></script>

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || []
                                function gtag() { dataLayer.push(arguments) }

                                gtag('js', new Date())
                                gtag('config', '${enviroments.GA_KEY}')
                            `
                        }}
                    />

                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
