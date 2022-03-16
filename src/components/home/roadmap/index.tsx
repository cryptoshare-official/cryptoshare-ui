import React from 'react'
import { format } from 'date-fns'
import { useMapState } from '@/hooks'
import RoadmapItems from './roadmap-items'
import locale from '@/locales/pages/home'
import { ptBR, enUS, es } from 'date-fns/locale'
import { HomeTranslateType } from '@/locales/types'
import { LanguageTypes } from '@/enums/language.enum'
import { useTranslate } from '@/hooks/translate.hook'
import AppSection from '@/components/common/app-section'
import { Subtitle, Container, RoadmapSeparator } from './styles'
import { RoadmapItemInterface } from '@/components/home/roadmap/@types'
import { LanguageStateInterface } from '@/store/interfaces/languageState.interface'

const Roadmap: React.FC = () => {
    const translate = useTranslate<HomeTranslateType>(locale)
    const { currentLanguage } = useMapState(
        'language'
    ) as LanguageStateInterface

    const buildDate = (month: number, year = 2022) => {
        const dateLocaleDisct = {
            [LanguageTypes.pt]: ptBR,
            [LanguageTypes.en]: enUS,
            [LanguageTypes.es]: es
        }

        const date = new Date(year, month - 1, 1)
        const locale = dateLocaleDisct[currentLanguage as 'pt' | 'en' | 'es']

        return format(date, 'LLLL yyyy', { locale })
    }

    const completedItems: RoadmapItemInterface[] = [
        {
            date: buildDate(10, 2021),
            description: translate.projectIdealization
        },
        {
            date: buildDate(11, 2021),
            description: translate.teamBuilding
        },
        {
            date: buildDate(11, 2021),
            description: translate.productDiscoveryProcess
        },
        {
            date: buildDate(12, 2021),
            description: translate.highFidelityPrototyping
        },
        {
            date: buildDate(3),
            description: translate.websiteLaunchAndWhiteListOpening
        }
    ]

    const secondQuarter: RoadmapItemInterface[] = [
        { description: translate.openingGold },
        { description: translate.openingSilver },
        { description: translate.openingBronze },
        { description: translate.openingIDOGosha },
        { description: translate.openingNFT },
        { description: translate.dailyLottery }
    ]

    const thirdQuarter: RoadmapItemInterface[] = [
        { description: translate.marketplaceOpening },
        { description: translate.cryptoAssetStartupLaunch },
        { description: translate.cryptoAssetPropertyLaunch },
        { description: translate.cryptoAssetFranchiseLaunch },
        { description: translate.openingExternalPartnerships },
        { description: translate.internalSales },
        { description: translate.solanaNetwork }
    ]

    return (
        <Container id="roadmap">
            <AppSection title="Roadmap">
                <Subtitle>{translate.titleRoadmap}</Subtitle>

                <RoadmapItems items={completedItems} isCompleted={true} />

                <RoadmapSeparator>{translate.secondQuarter}</RoadmapSeparator>
                <RoadmapItems items={secondQuarter} isCompleted={false} />

                <RoadmapSeparator>{translate.thirdQuarter}</RoadmapSeparator>
                <RoadmapItems items={thirdQuarter} isCompleted={false} />

                <Subtitle>{translate.subtitleRoadmap}</Subtitle>
            </AppSection>
        </Container>
    )
}

export default Roadmap
