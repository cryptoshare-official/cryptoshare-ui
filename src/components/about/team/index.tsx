import React from 'react'
import locale from '@/locales/pages/about'
import { AboutTranslateType } from '@/locales/types'
import { useTranslate } from '@/hooks/translate.hook'
import AppSection from '@/components/common/app-section'

import Wolf from '@/assets/images/team/wolf.png'
import Tiger from '@/assets/images/team/tiger.png'
import Penguin from '@/assets/images/team/penguin.png'
import Leopard from '@/assets/images/team/leopard.png'
import Caterpillar from '@/assets/images/team/caterpillar.png'

import { Container, Grid, View, Box, Image, Title, Subtitle } from './styles'

const Team: React.FC = () => {
    const translate = useTranslate<AboutTranslateType>(locale)

    const teamMembers = [
        {
            image: Wolf,
            name: 'Jonathan Acquesta',
            office: translate.chiefExecutiveOfficer
        },
        {
            image: Tiger,
            name: 'Thiago Anuzkiewicz',
            office: translate.chiefTechnologyOfficer
        },
        {
            image: Caterpillar,
            name: 'Milena Lima',
            office: translate.chiefOperatingOfficer
        },
        {
            image: Penguin,
            name: 'Pedro Silva',
            office: translate.vicePresidentOfEngineering
        },
        {
            image: Leopard,
            name: 'Diogo Glinglani',
            office: translate.chiefMarketingOfficer
        }
    ]

    return (
        <Container>
            <AppSection title={translate.ourTeam}>
                <Grid>
                    {teamMembers.map((member, index) => (
                        <View key={index}>
                            <Image src={member.image} alt={member.name} />

                            <Box>
                                <Title>{member.name}</Title>
                                <Subtitle>{member.office}</Subtitle>
                            </Box>
                        </View>
                    ))}
                </Grid>
            </AppSection>
        </Container>
    )
}

export default Team
