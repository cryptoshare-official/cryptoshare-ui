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

    const buildDate = (month: number, year: number = 2022) => {
        const dateLocaleDisct = {
            [LanguageTypes.pt]: ptBR,
            [LanguageTypes.en]: enUS,
            [LanguageTypes.es]: es
        }

        const date = new Date(year, month - 1, 1)
        const locale = dateLocaleDisct[currentLanguage]

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
            date: buildDate(2),
            description: translate.websiteLaunchAndWhiteListOpening
        }
    ]

    const nextItems: RoadmapItemInterface[] = [
        {
            date: buildDate(3),
            description: translate.openingGold
        },
        {
            date: buildDate(4),
            description: translate.openingSilver
        },
        {
            date: buildDate(4),
            description: translate.openingBronze
        },
        {
            date: buildDate(5),
            description: translate.openingNFT
        },
        {
            date: buildDate(5),
            description: translate.dailyLottery
        },
        {
            date: buildDate(5),
            description: translate.marketplaceOpening
        },
        {
            date: buildDate(6),
            description: translate.cryptoAssetStartupLaunch
        },
        {
            date: buildDate(6),
            description: translate.cryptoAssetPropertyLaunch
        },
        {
            date: buildDate(6),
            description: translate.cryptoAssetFranchiseLaunch
        },
        {
            date: buildDate(6),
            description: translate.openingExternalPartnerships
        },
        {
            date: buildDate(7),
            description: translate.internalSales
        },
        {
            date: buildDate(7),
            description: translate.solanaNetwork
        }
    ]

    return (
        <Container id="roadmap">
            <AppSection title="Roadmap">
                <Subtitle>{translate.titleRoadmap}</Subtitle>

                <RoadmapItems items={completedItems} isCompleted={true} />
                <RoadmapSeparator>Upcomming</RoadmapSeparator>
                <RoadmapItems items={nextItems} isCompleted={false} />

                <Subtitle>{translate.subtitleRoadmap}</Subtitle>
            </AppSection>
        </Container>
    )
}

export default Roadmap
