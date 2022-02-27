import React from 'react'
import { ScoreGridProps } from '../@types'
import locales from '@/locales/pages/whitelist'
import { BsFillTriangleFill } from 'react-icons/bs'
import { useTranslate } from '@/hooks/translate.hook'
import { WhitelistTranslateType } from '@/locales/types'
import { Container, Card, Icon, Title, Value, Action, Button } from './styles'

const ScoreGrid: React.FC<ScoreGridProps> = props => {
    const translate = useTranslate<WhitelistTranslateType>(locales)

    return (
        <Container>
            {props.items.map((item, index) => (
                <Card key={index}>
                    <Icon>{item.icon}</Icon>
                    <Title>{item.title}</Title>
                    <Value>
                        <i>
                            <BsFillTriangleFill />
                        </i>
                        +{item.score} {translate.score}
                    </Value>
                    <Action>
                        <Button onClick={() => props.onSelect(item)}>
                            {translate.accomplish}
                        </Button>
                    </Action>
                </Card>
            ))}
        </Container>
    )
}

export default ScoreGrid
