import { ScoreInterface } from '@/interfaces/whitelist.interface'

export interface SupershareProps {
    scoreItems: ScoreInterface[]
    onSelect: Function
}

export interface ParticipateProps {
    scoreItems: ScoreInterface[]
    onSelect: Function
}

export interface ScoreGridProps {
    items: ScoreInterface[]
    onSelect: Function
}

export interface GoldListRegisterProps {
    onSubmit?: Function
}
