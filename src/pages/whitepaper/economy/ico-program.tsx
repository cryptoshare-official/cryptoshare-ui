import React from 'react'
import AppHead from '@/components/common/app-head'
import { useTranslate } from '@/hooks/translate.hook'
import {
    Container,
    Title,
    Paragraph
} from '@/styles/pages/whitepaper/ico-program'
import { WhitepaperICOProgramTranslateType } from '@/locales/types'
import locale from '@/locales/pages/whitepaper/economy/ico-program'

const WhitepaperEconomyICOProgram: React.FC = () => {
    const translate = useTranslate<WhitepaperICOProgramTranslateType>(locale)

    const buildColumns = (label: string, points = '+2') => {
        return [
            { label, colSpan: 1 },
            { label: points, colSpan: 1 },
            { label: translate.languageAndLogin, colSpan: 1 },
            { label: '1', colSpan: 1 }
        ]
    }

    const dataTable = {
        header: [
            translate.action,
            translate.points,
            translate.information,
            translate.phase
        ],
        rows: [
            { columns: buildColumns(translate.followOnInstagram) },
            { columns: buildColumns(translate.likeTheFacebook) },
            { columns: buildColumns(translate.joinTelegramGroup) },
            { columns: buildColumns(translate.followOnTwitter) },
            { columns: buildColumns(translate.joinDiscordGroup) },
            {
                columns: [
                    {
                        label: translate.freeAccessToSuperShare,
                        colSpan: 4
                    }
                ]
            },
            { columns: buildColumns(translate.repostOnInstagram, '+5') },
            { columns: buildColumns(translate.repostOnFacebook, '+5') },
            { columns: buildColumns(translate.retweetOnTweet, '+5') },
            { columns: buildColumns(translate.referralLink, 'x2') },
            {
                columns: [
                    { label: translate.releaseLink, colSpan: 2 },
                    { label: translate.pointsFromReferrals, colSpan: 2 }
                ]
            }
        ]
    }

    return (
        <>
            <AppHead title="Whitepaper" />
            <Container>
                <Title>{translate.title}</Title>
                <Paragraph>{translate.description}</Paragraph>
                <Paragraph>{translate.phases}</Paragraph>

                <table>
                    <thead>
                        <tr>
                            {dataTable.header.map((item, index) => (
                                <th key={index}>{item}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {dataTable.rows.map((row, index) => (
                            <tr key={index}>
                                {row.columns.map((column, indexColumn) => (
                                    <td
                                        key={indexColumn}
                                        colSpan={column.colSpan}
                                        align={
                                            column.colSpan === 4
                                                ? 'center'
                                                : 'left'
                                        }
                                    >
                                        {column.label}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Container>
        </>
    )
}

export default WhitepaperEconomyICOProgram
