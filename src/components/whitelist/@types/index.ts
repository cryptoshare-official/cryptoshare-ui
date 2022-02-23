import { ScoreInterface } from '@/interfaces/whitelist.interface'

export interface SupershareProps {
    scoreItems: ScoreInterface[]
}

export interface ParticipateProps {
    scoreItems: ScoreInterface[]
}

export interface ScoreGridProps {
    items: ScoreInterface[]
}

export interface GoldListRegisterProps {
    onSubmit?: any
}
