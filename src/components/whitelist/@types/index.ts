import { ScoreInterface } from '@/interfaces/whitelist.interface'

export interface SupershareProps {
    scoreItems: ScoreInterface[]
    onSelect: (item: ScoreInterface) => void
}

export interface ParticipateProps {
    scoreItems: ScoreInterface[]
    onSelect: (item: ScoreInterface) => void
}

export interface ScoreGridProps {
    items: ScoreInterface[]
    onSelect: (item: ScoreInterface) => void
}

export interface GoldListRegisterProps {
    onSubmit?: (data: { email: string }) => void
}
