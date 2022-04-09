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
            office: translate.chiefExecutiveOfficer,
            link: 'https://www.linkedin.com/in/jonathan-caravaggio-acquesta-a26a4422'
        },
        {
            image: Tiger,
            name: 'Thiago Anuszkiewicz',
            office: translate.chiefTechnologyOfficer,
            link: 'https://www.linkedin.com/in/thiago-vasconcellos-anuzkiewicz-ba070442'
        },
        {
            image: Caterpillar,
            name: 'Milena Lima',
            office: translate.chiefOperatingOfficer,
            link: 'https://www.linkedin.com/in/milena-lima-caravaggio-acquesta-17b779148'
        },
        {
            image: Penguin,
            name: 'Pedro Silva',
            office: translate.vicePresidentOfEngineering,
            link: 'https://www.linkedin.com/in/pedro-silva-65996a181'
        },
        {
            image: Leopard,
            name: 'Diogo Glinglani',
            office: translate.chiefMarketingOfficer,
            link: 'https://www.linkedin.com/in/diogo-glinglani-1b538b70'
        }
    ]

    const openLink = (link: string) => window.open(link, '_blank')

    return (
        <Container>
            <AppSection title={translate.ourTeam}>
                <Grid>
                    {teamMembers.map((member, index) => (
                        <View key={index} onClick={() => openLink(member.link)}>
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
