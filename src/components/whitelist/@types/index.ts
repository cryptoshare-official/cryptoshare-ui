import { ScoreInterface } from '@/interfaces/whitelist.interface'

export interface SupershareProps {
    scoreItems: ScoreInterface[]
    onSelect: () => void
}

export interface ParticipateProps {
    scoreItems: ScoreInterface[]
    onSelect: () => void
}

export interface ScoreGridProps {
    items: ScoreInterface[]
    onSelect: () => void
}

export interface GoldListRegisterProps {
    onSubmit?: (data: { email: string }) => void
}
