import React from 'react'
import AppHead from '@/components/common/app-head'
import { useTranslate } from '@/hooks/translate.hook'
import { Container } from '@/styles/pages/whitepaper'
import { WhitepaperTranslateType } from '@/locales/types'
import locale from '@/locales/pages/whitepaper/economy/ido-program'
import WhitepaperContent from '@/components/whitepaper/whitepaper-content'

const WhitepaperEconomyIDOProgram: React.FC = () => {
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

export default WhitepaperEconomyIDOProgram
