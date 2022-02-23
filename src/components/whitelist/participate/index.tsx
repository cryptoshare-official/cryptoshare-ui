import React from 'react'
import ScoreGrid from '../score-grid'
import { ParticipateProps } from '../@types'
import locales from '@/locales/pages/whitelist'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'
import AppSection from '@/components/common/app-section'
import {
    Container,
    ScoreTitle,
    ScoreSubtitle,
    ScoreTitleBox,
    ScoreTitleBadge,
    ScoreTitleContent
} from './styles'

const Participate: React.FC<ParticipateProps> = props => {
    const translate = useTranslate<WhitelistTranslateType>(locales)

    const customTitle = (
        <ScoreTitleContent>
            <ScoreTitleBox>
                <ScoreTitle>{translate.participate}</ScoreTitle>
                <ScoreSubtitle>{translate.participateSubTitle}</ScoreSubtitle>
            </ScoreTitleBox>

            <ScoreTitleBadge>0 {translate.score}</ScoreTitleBadge>
        </ScoreTitleContent>
    )

    return (
        <Container>
            <AppSection
                title={customTitle}
                separatorClass="mb-5"
                titleClass="mb-5 items-start"
            >
                <ScoreGrid items={props.scoreItems} />
            </AppSection>
        </Container>
    )
}

export default Participate
