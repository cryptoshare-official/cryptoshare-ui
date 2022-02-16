import React from 'react'
import {
    Container,
    Content,
    Title,
    Separator,
    Grid,
    Card,
    CardHeader,
    CardTitle,
    CardDescription
} from './styles'

const Meet: React.FC = () => {
    const items = [
        {
            icon: 'icone',
            title: 'Proposito',
            description:
                'A Crypto Share nasce em um momento de expansão da web3.0 e com toda tecnologia baseada em confiança que essa revolução nos proporciona, agora temos como democratizar investimentos antes inalcançáveis para a grande maioria dos investidores.'
        },
        {
            icon: 'icone',
            title: 'Missão',
            description:
                'Democratizar os investimentos para que investidores com qualquer tamanho de capital possa participar de projetos maiores mesmo sem ter estrutura, conhecimento e dinheiro suficiente para esses projetos.'
        },
        {
            icon: 'icone',
            title: 'Visão e Valores',
            description:
                'Ser conhecida como a principal plataforma de investimento democratizado na web3.0 e atingir esse objetivo baseados em nossos três pilares: transparência, integridade e democratização.'
        }
    ]

    return (
        <Container id="meet">
            <Content>
                <Title>
                    <Separator />
                    Conheça a Cryptoshare
                </Title>

                <Grid>
                    {items.map(({ icon, title, description }, index) => (
                        <Card key={index}>
                            <CardHeader>
                                {icon}
                                <Separator />
                            </CardHeader>

                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </Card>
                    ))}
                </Grid>
            </Content>
        </Container>
    )
}

export default Meet
