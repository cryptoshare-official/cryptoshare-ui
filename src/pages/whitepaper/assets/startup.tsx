import React from 'react'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/whitepaper'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitepaperTranslateType } from '@/locales/types'
import locale from '@/locales/pages/whitepaper/assets/startup'
import WhitepaperContent from '@/components/whitepaper/whitepaper-content'

const WhitepaperAssetsStartup: React.FC = () => {
    const translate = useTranslate<WhitepaperTranslateType>(locale)

    return (
        <>
            <AppHead title="Whitepaper" />
            <Container>
                <WhitepaperContent
                    title={translate.title}
                    content={translate.content}
                />
            </Container>
        </>
    )
}

export default WhitepaperAssetsStartup
