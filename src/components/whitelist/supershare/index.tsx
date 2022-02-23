import React from 'react'
import ScoreGrid from '../score-grid'
import { SupershareProps } from '../@types'
import locales from '@/locales/pages/whitelist'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'
import AppSection from '@/components/common/app-section'
import { Card, Container, Title, Button, ButtonText } from './styles'
import AppGradientContainer from '@/components/common/app-gradient-container'

const Supershare: React.FC<SupershareProps> = props => {
    const translate = useTranslate<WhitelistTranslateType>(locales)

    return (
        <>
            <Container>
                <AppSection title={translate.becomeSupershare}>
                    <Card>{translate.becomeSupershareContent}</Card>
                </AppSection>
            </Container>

            <AppGradientContainer contentClass="flex justify-center items-center sm:justify-between">
                <Title>{translate.becomeSupershare}</Title>

                <Button>
                    <ButtonText>{translate.wantToBeSupershare}</ButtonText>
                </Button>
            </AppGradientContainer>

            <Container>
                <AppSection>
                    <ScoreGrid items={props.scoreItems} />
                </AppSection>
            </Container>
        </>
    )
}

export default Supershare
